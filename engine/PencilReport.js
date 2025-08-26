// Import model variables from Build.js
import { 
    pencil_sections_extraction_model, 
    pencil_subresults_extraction_model, 
    pencil_answers_model, 
    pencil_answers_feedback_model, 
    pencil_sections_analysis_model, 
    pencil_units_extraction_model, 
    pencil_relations_model,
    PROMPTS_TABLE,
    net
} from './Build.js';

// Import functions from LLMsKirigami.js
import { buildPromptAndSend, server_side_completion } from '../libraries/LLMsKirigami.js';

let pencil_sections_extraction_prompt
let pencil_answers_prompt
let pencil_answers_feedback_prompt
let pencil_sections_analysis_prompt
let pencil_units_extraction_prompt
let pencil_relations_prompt

const QUESTIONS_FEEDBACK = []
const SECTIONS_FEEDBACK = []
const RELATIONS_FEEDBACK = []


//////tru only on tests
const NO_ANSWERS = false


const PENCIL_REPORT_OBJECT = {
    questions:QUESTIONS_FEEDBACK,
    sections:SECTIONS_FEEDBACK,
    relations:RELATIONS_FEEDBACK
}

// Define functions using function declarations so they get hoisted
function initPencilMode(paper, callBackEach, callBackAll){
    pencilSectionsExtraction(paper, callBackEach, callBackAll)
}

function _buildPencil(){
    console.log(JSON.stringify(PENCIL_REPORT_OBJECT, null, 2))
}

function sendReport(callBackEach,step, next_steps, actor_type="", actor=""){
    callBackEach({
        type:"partial report",
        value:{
            step:step,
            next_steps:next_steps,
            actor_type:actor_type,
            actor:actor,
            nPromptsActive:window.nPromptsActive,
            report:JSON.parse(JSON.stringify(PENCIL_REPORT_OBJECT))
        }
    })
    //console.log("·sendReport: ", step, ", actor:", actor, "(actor_type:", actor_type, ")")
}

function pencilSectionsExtraction(paperContent, callBackEach, callBackAll){

    const insertions = [
        {
            "anchor":"[paper_content]",
            "content":paperContent
        }
    ]
    
    const onLoad = answer=>{
        let extractedSections = JSON.parse(answer.content)

        //it could be just one object outside the array
        if(!Array.isArray(extractedSections) && extractedSections.result) extractedSections = extractedSections.result
        if(!Array.isArray(extractedSections)) extractedSections = [extractedSections]

        startPencilAnalysis(extractedSections, callBackEach, callBackAll)
    }
    pencil_completion("pencil_sections_extraction", insertions, pencil_sections_extraction_model.alias, onLoad, false, "pencil_sections_extraction | extract sections from paper", callBackEach, callBackAll)
    sendReport(callBackEach, "pencil_sections_extraction", "pencil_answers, pencil_units_extraction, pencil_sections_analysis, pencil_subresults_extraction")
}

// Make functions globally available
if (typeof window !== 'undefined') {
    window.pencilSectionsExtraction = pencilSectionsExtraction;
    window.initPencilMode = initPencilMode;
    window._buildPencil = _buildPencil;
    console.log("✅ PencilReport functions made globally available");
}

//similar to pencilSectionsExtraction, but extracts only sections Subresult
function pencilSubresultsExtraction(resultsContent, callBackEach, callBackAll){
    const insertions = [
        {
            "anchor":"[results_content]",
            "content":resultsContent
        }
    ]

    const onLoad = answer=>{
        let extractedSubresults = JSON.parse(answer.content)

        //it could be just one object outside the array
        if(!Array.isArray(extractedSubresults) && extractedSubresults.result) extractedSubresults = extractedSubresults.result
        if(!Array.isArray(extractedSubresults)) extractedSubresults = [extractedSubresults]

        extractedSubresults.forEach(subresult=>{
            //if(subresult.section_name!="Subresult"){
                subresult.section_content = subresult.section_content
                subresult.subresult_title = subresult.section_name
                subresult.section_name = "Subresult"
                
            //}
        })

        ////////temporary
        const SUBRESULTS_FEEDBACK = []
        extractedSubresults.forEach(section=>{
            const section_in_feedback = {
                section_name:"Subresult",
                section_content:section.section_content,
                section_words_count:section.section_content?section.section_content.split(" ").length:0,
                subresult_title:section.subresult_title
            }
            SUBRESULTS_FEEDBACK.push(section_in_feedback)
            SECTIONS_FEEDBACK.push(section_in_feedback)
        })

        pencilAnswers(SUBRESULTS_FEEDBACK, true, callBackEach, callBackAll)
        pencilSectionsAnalysys(SUBRESULTS_FEEDBACK, callBackEach, callBackAll)
        pencilUnitsExtraction(SUBRESULTS_FEEDBACK, callBackEach, callBackAll)
        //startPencilAnalysis(extractedSections)
        ////////
    }

    pencil_completion("pencil_subresults_extraction", insertions, pencil_subresults_extraction_model.alias, onLoad, false, "pencil_subresults_extraction | extract subresult sections from Results", callBackEach, callBackAll)
    sendReport(callBackEach, "pencil_subresults_extraction", "pencil_answers, pencil_units_extraction, pencil_sections_analysis", "extracted Results", "extracted Results")
}


function startPencilAnalysis(extractedSections, callBackEach, callBackAll){
    let resultsSection
    extractedSections.forEach(section=>{
        if(section.section_name=="Results"){
            resultsSection = section
            return
        }
        SECTIONS_FEEDBACK.push({
            section_name:section.section_name,
            section_content:section.section_content,
            section_words_count:section.section_content?section.section_content.split(" ").length:0
        })
    })

    pencilAnswers(SECTIONS_FEEDBACK, false, callBackEach, callBackAll)
    pencilSectionsAnalysys(SECTIONS_FEEDBACK, callBackEach, callBackAll)
    pencilUnitsExtraction(SECTIONS_FEEDBACK, callBackEach, callBackAll)

    if(resultsSection){
        resultsSection.units_report = []
        pencilSubresultsExtraction(resultsSection.section_content, callBackEach, callBackAll)
    }
}


/////////////////////QUESTIONS ANALYSIS

//pencil_answers in table

function pencilAnswers(extractedSections, isSubresults=false, callBackEach, callBackAll){
    if(NO_ANSWERS) return

    if(isSubresults){
        extractedSections.forEach(extractedSubresult=>{
            pencilAnswers([extractedSubresult], false, callBackEach, callBackAll)
        })
        return
    }

    net.nodes.filter(node=>node.type=="question").forEach(questionNode=>{
        
        ////////relevant section extraction
        const directUnits = questionNode.to.filter(node=>node.type=="unit")
        const impactedSections = directUnits.map(unit=>unit.to.filter(node=>node.type=="section")[0]).filter(section=>section!=null)
        
        impactedSections.forEach(section=>{
            const nextLevelSection = section.to.find(node=>(node.type=="section" && node.name!="paper"))
            if(nextLevelSection) impactedSections.push(nextLevelSection)
        })
        const extractedSectionsRelevant = extractedSections.filter(section=>impactedSections.find(impactedSection=>impactedSection.name==section.section_name))

        if(extractedSectionsRelevant.length==0) return

        ////////////////////////////////////////

        const sections_content = extractedSectionsRelevant.map(section=>section.section_name+":\n"+section.section_content).join("\n\n")
        const question = questionNode.description

        const insertions = [
            {
                "anchor":"[sections_content]",
                "content":sections_content
            },
            {
                "anchor":"[question]",
                "content":question
            },
            {
                "anchor":"[question_description]",
                "content":question
            },
            {
                "anchor":"[question_explanation]",
                "content":questionNode.explanation
            },
            {
                "anchor":"[question_example]",
                "content":questionNode.examples[0]
            },
            {
                "anchor":"[answer_feedback_guideline]",
                "content":questionNode.feedback_guideline||"(no feedback guideline)"
            },
            {
                "anchor":"[extended_prompt_pencil]",
                "content":questionNode.extended_prompt_pencil||"(no extended prompt)"
            }
        ]

        const onLoad = answer=>{
            const answerObject = {
                answer:answer.content.split("score:")[0].trim(),
                score:Number(answer.content.split("score:")[1].trim())
            }

            const question_object = {
                question_name:questionNode.name,
                question:question,
                answer:answerObject.answer,
                score:answerObject.score,
                relevant_sections:extractedSectionsRelevant.map(section=>section.section_name).join(", ")
            }

            if(question_object.answer.toLowerCase().indexOf("answer: ")==0) question_object.answer = question_object.answer.substring("answer: ".length).trim()

            QUESTIONS_FEEDBACK.push(question_object)

            pencilAnswerFeedback(question_object, questionNode, callBackEach, callBackAll)
        }

        pencil_completion("pencil_answers", insertions, pencil_answers_model.alias, onLoad, false, "pencil_answers | question analysis for question: "+questionNode.name, callBackEach, callBackAll)
        sendReport(callBackEach, "pencil_answers", "pencil_answers_feedback", "question", questionNode.name)
    })
}

///////////////////// ANSWERS FEEDBACK+


//provides a feedback for the answer of a question
function _extractFeedbackObject(feedbackObject) {
    // Keep searching until we find an object with category property
    while (!feedbackObject.category && typeof feedbackObject === 'object') {
        // Look for any arrays nested in the object
        const nestedArrays = Object.values(feedbackObject).filter(Array.isArray);
        
        // Look for any objects nested in the object
        const nestedObjects = Object.values(feedbackObject).filter(val => 
            typeof val === 'object' && !Array.isArray(val)
        );

        if (nestedArrays.length > 0) {
            // If there are arrays, take first item of first array
            feedbackObject = nestedArrays[0][0];
        } else if (nestedObjects.length > 0) {
            // If there are objects, take first object
            feedbackObject = nestedObjects[0];
        } else {
            // No more nesting to check
            break;
        }
    }

    return feedbackObject;
}


function pencilAnswerFeedback(question_object, questionNode, callBackEach, callBackAll){

    if(question_object.answerFeedback) return

    const onLoad = answer=>{
        let feedbackObject = JSON.parse(answer.content)
        
        feedbackObject = _extractFeedbackObject(feedbackObject)
        
        while(feedbackObject.result && Array.isArray(feedbackObject.result) && feedbackObject.result.length>0) feedbackObject = feedbackObject.result[0]
        
        question_object.answerFeedback = feedbackObject
    }

    const insertions = [
        {
            "anchor":"[question_description]",
            "content":question_object.question
        },
        {
            "anchor":"[question]",
            "content":question_object.question //to be removed
        },
        {
            "anchor":"[question_explanation]",
            "content":questionNode.explanation
        },
        {
            "anchor":"[question_example]",
            "content":questionNode.examples[0]
        },
        {
            "anchor":"[answer_content]",
            "content":question_object.answer
        },
        {
            "anchor":"[answer_feedback_guideline]",
            "content":questionNode.feedback_guideline||"(no feedback guideline)"
        },
        {
            "anchor":"[extended_prompt_pencil]",
            "content":questionNode.extended_prompt_pencil||"(no extended prompt)"
        }
    ]

    pencil_completion("pencil_answers_feedback", insertions, pencil_answers_feedback_model.alias, onLoad, true, "pencil_answers_feedback | answer feedback for question: "+question_object.question_name, callBackEach, callBackAll)
    sendReport(callBackEach, "pencil_answers_feedback", "", "question", question_object.question_name)
}

///////////////////// SECTIONS ANALYSIS

function pencilSectionsAnalysys(extractedSections, callBackEach, callBackAll){
    extractedSections.forEach(section=>{
        const sectionNode = net.get(section.section_name)

        if(!sectionNode) return

        const insertions = [
            {
                "anchor":"[section_name]",
                "content":section.section_name
            },
            {
                "anchor":"[section_content]",
                "content":section.section_content
            },
            {
                "anchor":"[section_explanation]",
                "content":sectionNode.explanation
            },
            {
                "anchor":"[section_example]",
                "content":sectionNode.example||"(no example)"
            },
            {
                "anchor":"[section_guidelines]",
                "content":sectionNode.id=="Results"?(net.get("Subresult").guidelines):sectionNode.guidelines
            }
        ]

        const onLoad = answer=>{
            section.feedback = JSON.parse(answer.content)
            section.feedback = _extractArrayFromObject(section.feedback)
        }

        pencil_completion("pencil_sections_analysis", insertions, pencil_sections_analysis_model.alias, onLoad, true, "pencil_sections_analysis | sections analysis for "+section.section_name, callBackEach, callBackAll)
        sendReport(callBackEach, "pencil_sections_analysis", "", "section", section.section_name)
    })
}






///////////////////// DEEP SECTIONS ANALYSIS (UNITS)

function pencilUnitsExtraction(sections, callBackEach, callBackAll){
    sections.forEach(section=>{
        const sectionNode = net.get(section.section_name)||net.getByName(section.section_name)
        if(!sectionNode) return

        const units = sectionNode.from.filter(node=>node.type=="unit")

        units.forEach(unit=>{
            pencilUnitExtraction(section, sectionNode, unit, callBackEach, callBackAll)
        })
    })
}

function pencilUnitExtraction(section, sectionNode, unit, callBackEach, callBackAll){
    if(!sectionNode) return

    const unit_with_explanation_guidelines = "{"+unit.name+"\n"+unit.explanation+"\nguidelines:\n"+unit.guidelines.replaceAll("\n\n\n","\n\n")+"}"

    //temporary, to be removed
    const units_with_explanation_guidelines = unit_with_explanation_guidelines// [unit].map(unit=>"{"+unit.name+"\n"+unit.explanation+"\nguidelines:\n"+unit.guidelines.replaceAll("\n\n\n","\n\n")+"}").join("\n\n") 

    const insertions = [
        {
            "anchor":"[section_name]",
            "content":section.section_name
        },
        {
            "anchor":"[section_content]",
            "content":section.section_content
        },
        {
            "anchor":"[section_explanation]",
            "content":sectionNode.explanation
        },
        {
            "anchor":"[section_guidelines]",
            "content":sectionNode.id=="Results"?(net.get("Subresult").guidelines):sectionNode.guidelines
        },
        {
            "anchor":"[unit_with_explanation_guidelines]",
            "content":unit_with_explanation_guidelines
        },
        {//temporary, to be removed
            "anchor":"[units_with_explanation_guidelines]",
            "content":units_with_explanation_guidelines
        }
    ]

    const onLoad = answer=>{
        if(!section.units_report) section.units_report = []

        const newUnitOnReport = JSON.parse(answer.content)
        newUnitOnReport.unit_name = unit.name// newUnitOnReport.unit_name.toLowerCase().trim()

        newUnitOnReport.relations = []

        section.units_report.push(newUnitOnReport)

        relationsForUnit(newUnitOnReport, section, callBackEach, callBackAll)
    }
    
    pencil_completion("pencil_units_extraction", insertions, pencil_units_extraction_model.alias, onLoad, true, "pencil_units_extraction | unit extraction for "+section.section_name+", and unit "+unit.name, callBackEach, callBackAll)
    sendReport(callBackEach, "pencil_units_extraction", "pencil_relations", "unit", unit.name+" at "+section.section_name)
}

function relationsForUnit(unitOnReport, sectionOnReport, callBackEach, callBackAll){
    const unitNode = net.get(unitOnReport.unit_name)||net.getByName(unitOnReport.unit_name)

    if(!unitNode) return

    SECTIONS_FEEDBACK.forEach(otherSectionOnReport=>{
        if(!otherSectionOnReport.units_report) return
        otherSectionOnReport.units_report.forEach(otherUnitOnReport=>{
            if(otherUnitOnReport.unit_name==unitOnReport.unit_name) return

            const otherUnitNode = net.get(otherUnitOnReport.unit_name)||net.getByName(otherUnitOnReport.unit_name)
            if(!otherUnitNode) return

            const relation_in_network = net.relations.getFirstRelationBetweenNodes(unitNode, otherUnitNode)

            if(relation_in_network){
                const relationOnReport = {
                    unit_from:unitNode.name,
                    section_from:sectionOnReport.section_name,
                    unit_to:otherUnitNode.name,
                    section_to:otherSectionOnReport.section_name,
                    description:unitNode.name+" ("+sectionOnReport.section_name+") → "+otherUnitNode.name+" ("+otherSectionOnReport.section_name+")",
                    relation_found:true
                }

                pencilRelation(unitOnReport, otherUnitOnReport, relationOnReport, relation_in_network, callBackEach, callBackAll)

            } else {
                //console.log("[UR] no relation found in network")
            }
        })
    })
}



function pencilRelation(unitOnReport, otherUnitOnReport, relationOnReport, relation_in_network, callBackEach, callBackAll){
    const insertions = [
        {
            "anchor":"[unit_name]",
            "content":unitOnReport.unit_name
        },
        {
            "anchor":"[other_unit_name]",
            "content":otherUnitOnReport.unit_name
        },
        {
            "anchor":"[unit_content]",
            "content":unitOnReport.unit_content
        },
        {
            "anchor":"[other_unit_content]",
            "content":otherUnitOnReport.unit_content
        }
    ]

    const onLoad = answer=>{
        const relationJSON = JSON.parse(answer.content)
        relationOnReport.type = relationJSON.type
        relationOnReport.strength = relationJSON.strength
        relationOnReport.explanation = relationJSON.explanation

        if(relation_in_network.node0.name==unitOnReport.unit_name){
            unitOnReport.relations.push(relationOnReport)
        } else {
            otherUnitOnReport.relations.push(relationOnReport)
        }

        RELATIONS_FEEDBACK.push(relationOnReport)
    }

    pencil_completion("pencil_relations", insertions, pencil_relations_model.alias, onLoad, true, "pencil_relations | relation analysis for "+unitOnReport.unit_name+" and "+otherUnitOnReport.unit_name, callBackEach, callBackAll)
    sendReport(callBackEach, "pencil_relations", "", "units", unitOnReport.unit_name+" and "+otherUnitOnReport.unit_name)
}





function pencil_completion(id_prompt, insertions, alias, onLoad, structured=false, description="", callBackEach, callBackAll){
    // console.log(">>>>> pencil_completion, id_prompt:", id_prompt)
    // console.log(">>>>> pencil_completion, insertions:", insertions)
    // console.log(">>>>> pencil_completion, alias:", alias)
    // //console.log(">>>>> pencil_completion, onLoad:", onLoad)
    // console.log(">>>>> pencil_completion, structured:", structured)
    // console.log(">>>>> pencil_completion, description:", description)

    

    const prompt = PROMPTS_TABLE.get(id_prompt)[0]
    //console.log(">>>>> pencil_completion, prompt:", prompt)


    const onLoadBridge = answer=>{
        //console.log("onLoadBridge | pencil_completion, onLoadBridge, answer:", answer)
        onLoad(answer)

        let reportObject = answer.reportObject
        reportObject.nPromptsActive = window.nPromptsActive

        callBackEach({
            type:"models usage",
            value:reportObject
        })

        if(reportObject.nPromptsActive==0){
            callBackAll({
                type:"report complete",
                value:PENCIL_REPORT_OBJECT
            })
        }
    }

    buildPromptAndSend(insertions, prompt, alias, onLoadBridge, structured, description)
}



///////////////helpers

function _simplifyString(str){
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

function pencil(){
    saveStringAsFile(JSON.stringify(PENCIL_REPORT_OBJECT, null, 2), "confluencePencilReport.json")
}

function _extractArrayFromObject(obj){
    if(!Array.isArray(obj)){
        // Check all properties to find an array
        for(const key in obj) {
            if(Array.isArray(obj[key])) {
                obj = obj[key];
                break;
            }
        }
    }

    return obj
}

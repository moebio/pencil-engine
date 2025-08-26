// Build.js - Pencil Engine Build Functions

// Global variables
let QUESTIONS_TABLE = null
let UNITS_TABLE = null
let SECTIONS_TABLE = null
let PROMPTS_TABLE = null
let PROMPTS_UNITS_AND_SECTIONS_TABLE = null
let GUIDELINES_TABLE = null
let MODELS_TABLE = null

const MODELS = []

let selectedModel
let defaultModel
let modelReferences
let modelStatements
let modelInjections
let modelGuidelines
let modelFeedback
let reverse_model

let model_temperature
let CHAT_GPT_API_MODEL

let pencil_sections_extraction_model
let pencil_subresults_extraction_model
let pencil_answers_model
let pencil_answers_feedback_model
let pencil_sections_analysis_model
let pencil_units_extraction_model
let pencil_relations_model

const no_guidelines = "(no guidelines)"

// Network variables
let net = null
let questions = null
let units = null
let sections = null
let paper_node = null

const colors = {
	"question":"#227755",
	"unit":"#7190BE",
	"manual":"#D9D9D9",
	"prompt":"#FFAA33",
	"section":"#BB11BB",
	"section_level_1":"",
	"section_level_2":"",
	"paper":"rgb(120,40,100)"
}

function buildModelsArray(){
	if(!MODELS_TABLE) return
	const names = MODELS_TABLE.get("name")
	const aliases = MODELS_TABLE.get("alias")
	const temperatures = MODELS_TABLE.get("temperatures")
	//const costs = MODELS_TABLE.get("cost")
	const input_costs = MODELS_TABLE.get("input_cost")
	const output_costs = MODELS_TABLE.get("output_cost")
	const bedrocks = MODELS_TABLE.get("bedrock")
	const defaults = MODELS_TABLE.get("default")
	const reverses = MODELS_TABLE.get("reverse")
	const statements = MODELS_TABLE.get("statements")
	const clean_references = MODELS_TABLE.get("clean_references")
	const injections = MODELS_TABLE.get("injection")
	const guidelines = MODELS_TABLE.get("guidelines")
	const notes = MODELS_TABLE.get("notes")
	const feedback = MODELS_TABLE.get("answer feedback")

	const pencil_sections_extraction = MODELS_TABLE.get("pencil_sections_extraction")
	const pencil_answers = MODELS_TABLE.get("pencil_answers")
	const pencil_answers_feedback = MODELS_TABLE.get("pencil_answers_feedback")
	const pencil_sections_analysis = MODELS_TABLE.get("pencil_sections_analysis")
	const pencil_units_extraction = MODELS_TABLE.get("pencil_units_extraction")
	const pencil_relations = MODELS_TABLE.get("pencil_relations")

	names.forEach((modelName,i)=>{
		const model = {
			name:modelName,
			name_bedrock:bedrocks[i],
			alias:aliases[i],
			temperatures:String(temperatures[i]).split(",").map(v=>Number(v)),
			//cost:Number(costs[i]),
			input_cost:Number(input_costs[i]),
			output_cost:Number(output_costs[i]),
			notes:notes[i],
			default:defaults[i]!=null,
			for_references:clean_references[i]!=null,
			for_statements:statements[i]!=null,	
			for_reverse:reverses[i]!=null,
			for_injection:injections[i]!=null,
			for_guidelines:guidelines[i]!=null,
			for_feedback:feedback[i]!=null,


			for_pencil_sections_extraction:pencil_sections_extraction[i]!=null,
			for_pencil_answers:pencil_answers[i]!=null,
			for_pencil_answers_feedback:pencil_answers_feedback[i]!=null,
			for_pencil_sections_analysis:pencil_sections_analysis[i]!=null,
			for_pencil_units_extraction:pencil_units_extraction[i]!=null,
			for_pencil_relations:pencil_relations[i]!=null
		}
		model.cost = 0.5*model.input_cost + 0.5*model.output_cost
		MODELS.push(model)
	})

	defaultModel = MODELS.find(md=>md.default)
	selectedModel = defaultModel
	modelReferences = MODELS.find(md=>md.for_references)
	modelStatements = MODELS.find(md=>md.for_statements)
	modelInjections = MODELS.find(md=>md.for_injection)
	modelGuidelines = MODELS.find(md=>md.for_guidelines)
	modelFeedback = MODELS.find(md=>md.for_feedback)
	//o3_mini_model = MODELS.find(md=>md.name.includes("o3-mini"))
	reverse_model = MODELS.find(md=>md.for_reverse)

	pencil_sections_extraction_model = MODELS.find(md=>md.for_pencil_sections_extraction)
	pencil_subresults_extraction_model = pencil_sections_extraction_model//MODELS.find(md=>md.for_pencil_subresults_extraction)
	pencil_answers_model = MODELS.find(md=>md.for_pencil_answers)
	pencil_answers_feedback_model = MODELS.find(md=>md.for_pencil_answers_feedback)
	pencil_sections_analysis_model = MODELS.find(md=>md.for_pencil_sections_analysis)
	pencil_units_extraction_model = MODELS.find(md=>md.for_pencil_units_extraction)
	pencil_relations_model = MODELS.find(md=>md.for_pencil_relations)

	model_temperature = selectedModel.temperatures[0]
	CHAT_GPT_API_MODEL = selectedModel.name
}

let _extractLLMSetup = function(LLM_setup){
	if(LLM_setup){
		const parts_LLM_setup = LLM_setup.includes(",")?LLM_setup.split(","):[LLM_setup]
        const temperature = parts_LLM_setup[1]?(parts_LLM_setup[1].includes("t:")?parts_LLM_setup[1].split("t:")[1]:parts_LLM_setup[1]):null
		const llm_setup = {alias:parts_LLM_setup[0]}
		if(temperature!=null) llm_setup.temperature = Number(temperature)
		return llm_setup
	}
	return {alias:defaultModel.alias}
}


// Define buildNetwork function second
function buildNetwork(){
	console.log("building network...")
	net = new _.Net()
	questions = new _.nL()
	units = new _.nL()
	sections = new _.nL()

	//const examples = QUESTIONS_TABLE.get("answers 1")//||QUESTIONS_TABLE.get("example 1")
	
	const units_ids = UNITS_TABLE[0]
	const unit_labels = UNITS_TABLE.get("label")
	const unit_explanations = UNITS_TABLE.get("explanation")
	const unit_guidelines = UNITS_TABLE.get("guidelines")
	const unit_LLM_setups = UNITS_TABLE.get("LLM setup")
	const unit_use_references = UNITS_TABLE.get("use refs")
	const units_examples = UNITS_TABLE.get("unit_example")

	units_ids.forEach((unit_id, i)=>{
		//if(!include_manual_2 && unit_id.includes("_2")) return
		const label = unit_labels[i]//unit_id.includes("_")?unit_id.split("_")[1]:unit_id
		const unit = net.createNode(unit_id, label)
		unit.type = "unit"
		unit.color = _.interpolateColors(colors[unit.type], _.temperature(i/(units_ids.length-1)), 0.3)
		
		unit.selectedColor =  _.interpolateColors(unit.color, "blue", 0.4)

		unit.explanation = unit_explanations[i]
		unit.guidelines = unit_guidelines[i]
		unit.LLM_setup = _extractLLMSetup(unit_LLM_setups[i])// unit_LLM_setups[i]||defaultModel.alias

		unit.use_references = unit_use_references[i]!=null && unit_use_references[i]!=null

		unit.example = units_examples[i]

		units.push(unit)
	})
	
	//let impacts = QUESTIONS_TABLE.get("Impacts")
	let question_labels = QUESTIONS_TABLE.get("label")
	let question_texts = QUESTIONS_TABLE.get("question")
	let question_explanations = QUESTIONS_TABLE.get("explanation")
	let question_examples = QUESTIONS_TABLE.get("example")
	let figure_flags = QUESTIONS_TABLE.get("figure_flag")
	let feedback_guidelines = QUESTIONS_TABLE.get("answer_feedback_guideline")
	let extended_prompt_pencil = QUESTIONS_TABLE.get("extended_prompt_pencil")

	QUESTIONS_TABLE[0].forEach((question_id,i)=>{
		const label = question_labels[i]// question_id.includes("_")?question_id.split("_")[1]:question_id
		const question = net.createNode(question_id, label)
		
		question.type = "question"

		question.color = colors[question.type]
		question.selectedColor =  _.interpolateColors(question.color, "rgb(30,255,80)", 0.5)

		question.question = question_texts[i]
		question.description = question.question

		question.explanation = question_explanations[i]
		//question.explanation = marked.parse(question.explanation).trim()

		question.examples = question_examples[i].split("***").tosL().trim().slice()

		question.feedback_guideline = feedback_guidelines[i]

		question.extended_prompt_pencil = extended_prompt_pencil[i]

		//spread asnwers
		for(let j=0; j<=9; j++){
			const answers_column = QUESTIONS_TABLE.get("answers "+j)
			if(answers_column) question["answer_"+j] = answers_column[i]
		}

		question.partial_answer = ""
		question.position = i

		question.isFigure = figure_flags[i]=="figure"
		question.isSubFigure = figure_flags[i]=="subfigure"

		questions.push(question)
	})

	let inputs = UNITS_TABLE.get("inputs")
	let context_inputs = UNITS_TABLE.get("context inputs")

	units_ids.forEach((unit_id,i)=>{
		const unit = net.get(unit_id)
		if(!unit) return

		unit.input_questions = []
		unit.input_units = []
		unit.context_units = []

		const links_inputs = inputs[i]?inputs[i].split(","):[]
		const links_inputs_context = context_inputs[i]?context_inputs[i].split(","):[]
		const links = links_inputs.concat(links_inputs_context)
		
		let prompt_node
		let relation

		links.forEach((link,j)=>{
			link = link.trim()
			const link_type = j<links_inputs.length?"input":"context"

			const clean_link = link.substr(1,link.length-2)
			const source_node = net.get(clean_link)
			if(!source_node) return

			//source to prompt
			relation = net.createRelation(source_node, unit)
			relation.type = link_type//"source to prompt"

			if(link_type=="input"){
				source_node.type=="question"?unit.input_questions.push(source_node):unit.input_units.push(source_node)
			
				//figures and subfigures
				if(source_node.isFigure && source_node.type=="question"){
					unit.isFigure = true
				} else if(source_node.isSubFigure && source_node.type=="question"){
					unit.isSubFigure = true
				}
				
			} else {
				unit.context_units.push(source_node)
			}
		})
	})

	net.relations.forEach(relation=>{if(!relation.color) relation.color = relation.node0.color})

	//sections tree

	const supersections = UNITS_TABLE.get("section")
	const minisections = UNITS_TABLE.get("minisection")
	const sectionsTable = [minisections, supersections]

	const section_color_low_level = "rgb(80,40,80)"//"rgb(50,0,34)"//"rgb(50,10,34)"//
	const section_color_high_level = "rgb(160,40,255)"//"rgb(255,40,255)"//

	units.forEach((unit,i)=>{
		sectionsTable.forEach((subsection, level)=>{
			const sub_section_name = subsection[i]
			if(sub_section_name){
				let sub_section = net.get(sub_section_name)
				if(!sub_section){
					sub_section = net.createNode(sub_section_name)
					sub_section.type = "section"
					sub_section.level = level+1
					sub_section.color = _.interpolateColors(section_color_low_level, section_color_high_level , 0.8*level/2)
					sub_section.selectedColor =  _.interpolateColors(sub_section.color, "rgb(240,20,255)", 0.5)
					sections.push(sub_section)
					sub_section.a0 = 9999
					sub_section.a1 = -9999
				}
				if(unit.a0){
					sub_section.a0 = Math.min(sub_section.a0, unit.a0)
					sub_section.a1 = Math.min(sub_section.a1, unit.a1)
				}
				const relation = net.createRelation(unit, sub_section)
				relation.type="section"
				unit = sub_section
			}
		})
	})

	//paper node
	paper_node = net.createNode("paper")
	paper_node.type = "section"// "paper"
	paper_node.color = colors["paper"]
	paper_node.selectedColor =  _.interpolateColors(paper_node.color, "rgb(255,0,255)", 0.5)
	

	sections.filter(section=>section.to.length==0).forEach(top_section=>{
		const relation = net.createRelation(top_section, paper_node)
		relation.type = "section"
	})

	paper_node.level = paper_node.from[0].level+1

	sections.push(paper_node)
	//paper_node.isPaper = true

	sections = sections.getSortedByProperty("level", false)


	//questions required

	const checkAntecesors = function(node, requiredQuestions){
		node.from.forEach(antecesor=>{
			if(antecesor.type=="question" && !requiredQuestions.includes(antecesor)) requiredQuestions.push(antecesor)
			checkAntecesors(antecesor, requiredQuestions)
		})
	}

	net.nodes.filter(node=>node.type!="question").forEach(node=>{
		const requiredQuestions = []
		checkAntecesors(node, requiredQuestions)
		node.requiredQuestions = requiredQuestions
	})


	//units impacted

	const checkDescent = function(node, impactedUnits, onlyUnits=true){
		node.to.forEach(son=>{
			if((!onlyUnits || son.type=="unit" || son.type=="section") && !impactedUnits.includes(son)) impactedUnits.push(son)
			checkDescent(son, impactedUnits, onlyUnits)
		})
	}

	questions.forEach(question=>{
		const impactedUnits = []
		checkDescent(question, impactedUnits)
		question.impactedUnits = impactedUnits

		const impactedAll = []
		checkDescent(question, impactedAll, false)
		impactedAll.forEach(node=>{
			node.subdivisible = question.subdivisible
		})
	})


	const checkSubUnits = function(node, sub_units){
		node.from.forEach(antecesor=>{
			if(antecesor.type=="unit"){
				sub_units.push(antecesor)
			} else if(antecesor.type=="section"){
				checkSubUnits(antecesor, sub_units)
			}
		})
	}

	net.nodes.filter(node=>node.type=="section" || node.type=="paper").forEach(node=>{
		const sub_units = []
		checkSubUnits(node, sub_units)
		node.sub_units  = sub_units
	})

	const explanations = SECTIONS_TABLE.get("explanation")
	const guidelines = SECTIONS_TABLE.get("section_guidelines")
	const section_LLM_setups = SECTIONS_TABLE.get("LLM setup")
	const section_use_references = SECTIONS_TABLE.get("use refs")
	const max_words_count = SECTIONS_TABLE.get("default_words_count")
	const section_examples = SECTIONS_TABLE.get("section_example")

	console.log("max_words_count:", max_words_count)


	SECTIONS_TABLE[0].forEach((sectionName,i)=>{
		const sectionNode = net.get(sectionName)
		if(sectionNode) {
			sectionNode.explanation = explanations[i]
			sectionNode.guidelines = guidelines[i]||no_guidelines
			sectionNode.LLM_setup = _extractLLMSetup(section_LLM_setups[i])
			sectionNode.use_references = section_use_references[i]!=null && section_use_references[i]!=null
			sectionNode.default_max_words_count = sectionNode.max_words_count = max_words_count[i]
			sectionNode.example = section_examples[i]
		}
	})

	//Results sharing guidelines with Subresult
	sections.forEach(sectionNode=>{
		if(!sectionNode.guidelines && sectionNode.to[0].guidelines) sectionNode.guidelines = sectionNode.to[0].guidelines
	})

	console.log("network built successfully", net)
}

// Main function that gets called when tables are loaded - define this last
export function onLoadTablesPencil(qTable, uTable, sTable, pTable, puTable, gTable, mTable){
	console.log("onLoadTablesPencil called with tables:", {qTable, uTable, sTable, pTable, puTable, gTable, mTable})
	
	QUESTIONS_TABLE = qTable
	UNITS_TABLE = uTable
	SECTIONS_TABLE = sTable
	PROMPTS_TABLE = pTable
	PROMPTS_UNITS_AND_SECTIONS_TABLE = puTable
	GUIDELINES_TABLE = gTable
	MODELS_TABLE = mTable

	console.log("PROMPTS_TABLE:", PROMPTS_TABLE)

	buildModelsArray()
	buildNetwork()

	console.log("onLoadTablesPencil completed successfully")
	
	// Now that everything is loaded, test the pencilSectionsExtraction function
	// if (typeof window !== 'undefined' && window.pencilSectionsExtraction) {
	// 	console.log("Testing pencilSectionsExtraction function...");
	// 	window.pencilSectionsExtraction("this is a test");
	// } else {
	// 	console.log("pencilSectionsExtraction function not available yet");
	// }
}

// Export necessary variables for other modules
export { net, questions, units, sections, paper_node };
export { QUESTIONS_TABLE, UNITS_TABLE, SECTIONS_TABLE, PROMPTS_TABLE, PROMPTS_UNITS_AND_SECTIONS_TABLE, GUIDELINES_TABLE, MODELS_TABLE };
export { pencil_sections_extraction_model, pencil_subresults_extraction_model, pencil_answers_model, pencil_answers_feedback_model, pencil_sections_analysis_model, pencil_units_extraction_model, pencil_relations_model };


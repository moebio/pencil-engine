//////////promptObject structure:
//{
//   prompt
//   onLoad
//   model
//   temperature
//   system_message
//}

//docs: https://p7mzhzggxb6lwc4bqoyixmr2ze0aqdrh.lambda-url.eu-west-1.on.aws/redoc#section/Changelog/0.5.0-(2025-04-01)

// Import fetch for Node.js environment
let fetch;
if (typeof window === 'undefined') {
    // Node.js environment
    const { default: nodeFetch } = await import('node-fetch');
    fetch = nodeFetch;
} else {
    // Browser environment - fetch is already available
    fetch = window.fetch;
}

const llm_api_urlCompletions = "https://p7mzhzggxb6lwc4bqoyixmr2ze0aqdrh.lambda-url.eu-west-1.on.aws/proxy"	
const llm_api_key = "e54a6dbc-4bab-47c6-99b3-fd0d0e865def"

// Define the missing MODELS_TABLE with actual supported aliases
const MODELS_TABLE = {
    alias: ["gpt4o", "gpt4om", "o3m", "o3m-h", "o3m-h-100k", "o3m-l", "o3m-m", "cl35-h", "cl35-s", "cl37", "cl37-t-h", "cl37-t-he", "cl37-t-l", "cl37-t-m", "clo4", "clo4-t-h", "clo4-t-he", "cls4", "cls4-t-h", "cls4-t-he", "ds-r1", "ds-r1-32k", "gem2", "gem2-8k", "gem2-lt", "gem25-f-prev", "gem25-pro-exp", "gem25-pro-prev", "gpt41", "gpt4o-16k", "o1", "o1-100k", "o1-pr", "o1-pr-32k", "o3", "o3-h", "o4m", "o4m-h"],
    input_cost: [0.15, 0.15, 0.01, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 0.5, 0.5, 0.5, 0.0, 0.5, 0.5, 0.15, 0.15, 5.0, 5.0, 5.0, 5.0, 0.01, 0.01, 0.01, 0.01],
    output_cost: [0.6, 0.6, 0.03, 15.0, 15.0, 15.0, 15.0, 15.0, 15.0, 15.0, 15.0, 15.0, 15.0, 15.0, 15.0, 15.0, 15.0, 15.0, 15.0, 15.0, 15.0, 1.5, 1.5, 1.5, 0.0, 1.5, 1.5, 0.6, 0.6, 15.0, 15.0, 15.0, 15.0, 0.03, 0.03, 0.03, 0.03]
}

// Define the missing saveStringAsFile function
function saveStringAsFile(content, filename) {
    if (typeof window !== 'undefined') {
        // Browser environment
        const blob = new Blob([content], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } else {
        // Node.js environment
        const fs = require('fs');
        fs.writeFileSync(filename, content);
        console.log(`File saved as ${filename}`);
    }
}

const LLM_ACTIVITIES_REPORT = []
const MODELS_ACTIVITY = []

let activePrompts = []
let concludedPrompts = []
let nPromptsActive = 0
let lastPromptObject

let TOTAL_COST_QUERY_SESSION = 0
let TOTAL_COST_RESPONSE_SESSION = 0
let TOTAL_COST_SESSION = 0



let server_side_completion = function(id_prompt, insertions, alias, description, onLoad){
	const promptObject = {
		prompt:{
            id_prompt,
            insertions
        },
		alias,
		onLoad,
        onError:ob=>{console.log("onError:",ob)},
		description
	}

    console.log(promptObject)
    llm_completion_proxy2(promptObject)
}

let llm_completion_with_insertions = function(insertions, id_prompt, alias, onLoad, structured=false, description=""){
    console.log("llm_completion_with_insertions, id_prompt:", id_prompt)
    const promptObject = {
        alias:alias,
        description:description,
        prompt:{
            id_prompt:id_prompt,
            insertions:insertions,
        },
        onLoad:onLoad
    }

    llm_completion_proxy2(promptObject)
}

let buildPromptAndSend = function(insertions, promptTemplate, alias, onLoad, structured=false, description=""){
	let prompt = promptTemplate

	insertions.forEach(insertion=>{
		prompt = prompt.replaceAll(insertion.anchor, insertion.content)
	})

	const promptObject = {
		prompt,
		alias,
		onLoad,
		description
	}	

	if(structured){
		promptObject.response_format = "json"
	}
    
	//llm_completion(promptObject)
    llm_completion_proxy2(promptObject)
}

let llm_completion_proxy2 = function(promptObject){
    


    //const repeatedPromptObject = activePrompts.concat(concludedPrompts).find(otherPromptObject=>otherPromptObject.prompt==promptObject.prompt)
    const repeatedPromptObject = LLM_ACTIVITIES_REPORT.find(otherPromptObject=>otherPromptObject.prompt==promptObject.prompt)
    if(repeatedPromptObject){
        console.log("\n\n\n\n\n\n++++++ REPEATED PROMPT!!!!!!!!!!!! repeatedPromptObject:", repeatedPromptObject)
        promptObject.onLoad({content:repeatedPromptObject.content, promptObject})
        return
    }


    activePrompts.push(promptObject)
    nPromptsActive++
    //console.log("++[LLMp] nPromptsActive:", nPromptsActive)
    lastPromptObject = promptObject

    //console.log("[LLMp] Starting LLM proxy... | promptObject.description:", promptObject.description)
    //console.log("[LLMp] promptObject.response_format:", promptObject.response_format)

	//const modelProviderIsOpenAI = promptObject.model.includes("openai")||promptObject.model.includes("gpt")||promptObject.model.includes("o1-")||promptObject.model.includes("o3-")

    const bodyJSON = {
        model_alias:promptObject.alias,
        provider: promptObject.alias?"":"openai",
        model: promptObject.alias?"":"gpt-4o-mini", //promptObject.model||"gpt-4o-mini",
        prompt: promptObject.prompt
    }

    if(promptObject.search){
        bodyJSON.model = null
        delete bodyJSON.model
        bodyJSON.model_alias = "gem25-f-prev"
        bodyJSON.provider = null
        delete bodyJSON.provider
        bodyJSON.tools = "google_search"
        console.log("bodyJSON:", bodyJSON)
    }
    // const response_format_dictionary = {
    //     "json": {"type": "json_object"}
    // }

    if(promptObject.response_format){
        bodyJSON.response_format = promptObject.response_format//response_format_dictionary[promptObject.responseFormat]
    }

    const requestOptions = {
        method: 'POST',
        headers: {
            'x-api-key': llm_api_key,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyJSON)
    }

    const date = new Date()

    const aliasIndex = MODELS_TABLE.alias.indexOf(promptObject.alias)
    const cost_perMtoken = MODELS_TABLE.input_cost[aliasIndex]
    const n_tokens_query = Math.round(promptObject.prompt.split(" ").length*4/3)
    const cost_query = (cost_perMtoken*n_tokens_query)/1000000
    TOTAL_COST_QUERY_SESSION += cost_query
    TOTAL_COST_SESSION = TOTAL_COST_RESPONSE_SESSION+TOTAL_COST_QUERY_SESSION
    
    const reportObject = {
        description:promptObject.description,
        alias:promptObject.alias,
        prompt:promptObject.prompt,
        structured:promptObject.response_format=="json",
        time_query:dateToString(date, 10),
        cost_query
    }

    LLM_ACTIVITIES_REPORT.push(reportObject)

    const slim_reportObject = {
        description:reportObject.description,
        alias:reportObject.alias,
        time_query:reportObject.time_query,
        time_stamp:date.getTime(),
        structured:promptObject.response_format=="json"
    }
    MODELS_ACTIVITY.push(slim_reportObject)
    
    fetch(llm_api_urlCompletions, requestOptions)
        .then(response => {
            nPromptsActive--
            //console.log("--[LLMp] nPromptsActive:", nPromptsActive)
            activePrompts = activePrompts.filter(p=>p!=promptObject)
            concludedPrompts.push(promptObject)
            //console.log("[LLMp] activePrompts:", activePrompts)
            return response.json()
        })
        .then(data => {
			data.promptObject = promptObject

            if(promptObject.search){
                console.log("++++++ data:", data)
                //data.content = data.search_metadata
                //promptObject.onLoad(data)

                const extractTextFromHTML = (html) => {
                    const parser = new DOMParser()
                    const doc = parser.parseFromString(html, 'text/html')

                    // Remove script and style elements
                    const scriptsAndStyles = doc.querySelectorAll('script, style, link, meta, noscript')
                    scriptsAndStyles.forEach(el => el.remove())

                    // Remove common navigation/header/footer elements
                    const nonContentElements = doc.querySelectorAll('nav, header, footer, aside, iframe, form, .ad, .ads, .advertisement, .social, .comments, #comments')
                    nonContentElements.forEach(el => el.remove())

                    // Get main content areas
                    const mainContent = doc.querySelectorAll('article, main, .content, .post, .entry, [role="main"]')
                    if (mainContent.length > 0) {
                        // If we found main content areas, use those
                        return Array.from(mainContent)
                            .map(el => el.textContent)
                            .join('\n')
                            .replace(/\s+/g, ' ') // Collapse whitespace
                            .replace(/\[[^\]]*\]/g, '') // Remove bracketed content
                            .trim()
                    }

                    // Fallback to body content if no main content found
                    return doc.body.textContent
                        .replace(/\s+/g, ' ') // Collapse whitespace
                        .replace(/\[[^\]]*\]/g, '') // Remove bracketed content
                        .trim()
                }

                // const extractTextFromHTML = (html)=>{
                //     const parser = new DOMParser()
                //     const doc = parser.parseFromString(html, 'text/html')
                //     return doc.body.textContent
                // }

                const onLoadedWebsites = (websitesContent)=>{
                    const websitesText = websitesContent.map(extractTextFromHTML)
                    console.log("++++++ websitesText:", websitesText)
                    data.web_contents = websitesText
                    promptObject.onLoad(data)
                }

                const websites = data.search_metadata.groundingChunks.map(chunk=>chunk.web.uri).slice(0,3)
                console.log("++++++ websites:", websites)

                const downloadWebsitesContent = (websitesUrls, onLoadedAll)=>{
                    //fetch('https://proxy.cors.sh/https://acme.com', {
                    //headers: {
                    //    'x-cors-api-key': 'temp_fd2ec67db238561298da430967646878'
                    //    }
                    //})
                    const cors_api_key = "temp_fd2ec67db238561298da430967646878"
                    //const url = "https://proxy.cors.sh/"+websitesUrls[0]
                    //console.log("++++++ url:", url) 

                    const requestOptions = {
                        method: 'GET',
                        headers: {
                            'x-cors-api-key': cors_api_key
                        }
                    }
                    
                    const promises = websitesUrls.map(url=>fetch("https://proxy.cors.sh/"+url, requestOptions).then(response=>response.text()))
                    Promise.all(promises).then(onLoadedAll)
                }

                downloadWebsitesContent(websites, onLoadedWebsites)
                
                return
            }
			//data.date = new Date()

            if(data.error || !data.content){
                throw new Error("LLM proxy error: " + (data.error || "No content returned from LLM"))
                return
            }

            promptObject.elapsed_time = (new Date()).getTime()-date.getTime()

            const n_tokens_response = Math.round(data.content.split(" ").length*4/3)
            const cost_response = (MODELS_TABLE.output_cost[aliasIndex]*n_tokens_response)/1000000
            TOTAL_COST_RESPONSE_SESSION += cost_response
            TOTAL_COST_SESSION = TOTAL_COST_RESPONSE_SESSION+TOTAL_COST_QUERY_SESSION
            

            reportObject.time_response = dateToString(new Date(), 10)
            reportObject.elapsed_time = promptObject.elapsed_time
            reportObject.query_tokens = Math.round(String(promptObject.prompt).split(" ").length*4/3)
            reportObject.answer_tokens = Math.round(data.content.split(" ").length*4/3)
            reportObject.content = data.content
            reportObject.cost_response = cost_response
            reportObject.cost = cost_query+cost_response

            reportObject.accumulated_cost_response = TOTAL_COST_RESPONSE_SESSION
            reportObject.accumulated_cost_query = TOTAL_COST_QUERY_SESSION
            reportObject.accumulated_cost = TOTAL_COST_RESPONSE_SESSION + TOTAL_COST_QUERY_SESSION


            slim_reportObject.time_response = reportObject.time_response
            slim_reportObject.elapsed_time = reportObject.elapsed_time
            slim_reportObject.query_tokens = reportObject.query_tokens
            slim_reportObject.answer_tokens = reportObject.answer_tokens

            data.reportObject = reportObject

            
			promptObject.onLoad(data)
        })
        .catch(error => {
            nPromptsActive--
            console.log("--[LLMp] nPromptsActive:", nPromptsActive)

            console.error("[LLMp] Error in prompt, description:", promptObject.description)
            console.error("[LLMp] Error with LLM proxy:", error)
            console.error("[LLMp] requestOptions:", requestOptions)
            console.error("[LLMp] promptObject.onError?:", promptObject.onError!=null)

            reportObject.error = error
            slim_reportObject.error = error

            if(promptObject.onError){
                promptObject.onError(error)
                return
            }
        })
        .finally(() => {
            
        })
}

function getLLMActivitiesReport(){
    return LLM_ACTIVITIES_REPORT
}

///////
//converts to HH:MM:SS
let dateToString=function(date) {// @todo: move to DateConversions
    return date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
}

let downloadLLMActivitiesReport = function(nodeName,includePrompt=true,includeAnswers=true){
	const report = getLLMActivitiesReport()
	report.forEach(ob=>{
		ob.prompt = ob.prompt.replace(/\\n/g, '\n');
		ob.content = ob.content?.replace(/\\n/g, '\n')||"/no content/"
	})
	const reportText = JSON.stringify(report, null, 2)//.replace(/\\n/g, '\n');
    
	saveStringAsFile(reportText,"confluencePromptsReport.json")
}


let llmr = downloadLLMActivitiesReport

// Export all functions to make them available for import
export {
    server_side_completion,
    llm_completion_with_insertions,
    buildPromptAndSend,
    llm_completion_proxy2,
    getLLMActivitiesReport,
    downloadLLMActivitiesReport,
    llmr,
    dateToString,
    saveStringAsFile,
    MODELS_TABLE,
    LLM_ACTIVITIES_REPORT,
    MODELS_ACTIVITY,
    TOTAL_COST_SESSION,
    TOTAL_COST_QUERY_SESSION,
    TOTAL_COST_RESPONSE_SESSION,
    nPromptsActive
}

// Make nPromptsActive available globally
if (typeof window !== 'undefined') {
    // Create a getter that always returns the current value
    Object.defineProperty(window, 'nPromptsActive', {
        get: function() { return nPromptsActive; },
        set: function(value) { nPromptsActive = value; },
        configurable: true
    });
    console.log("✅ nPromptsActive made globally available with live binding");
} else if (typeof global !== 'undefined') {
    // Node.js environment
    global.nPromptsActive = nPromptsActive;
    console.log("✅ nPromptsActive made globally available in Node.js");
}


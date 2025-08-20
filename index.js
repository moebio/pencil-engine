// Import LLMsKirigami functions
import {
    buildPromptAndSend,
    llm_completion_with_insertions,
    getLLMActivitiesReport,
    TOTAL_COST_SESSION
} from './libraries/LLMsKirigami.js';

// Load and parse the confluencePencilReport model at module initialization
let confluencePencilReport = null;
try {
    ///////////Previous version that works on local
  // const response = await fetch('./resources/confluencePencilReport_model.json');
    // if (response.ok) {
    //     confluencePencilReport = await response.json();
    //     console.log('✅ confluencePencilReport model loaded successfully');
    // } else {
    //     console.warn('⚠️ confluencePencilReport model not found, continuing without it');
    // }
    
    
    ///////////Marcos fix for production:
    // console.log('Loading confluencePencilReport model...');
    // const __dirname = path.dirname(new URL(import.meta.url).pathname);
    // const modelPath = path.resolve(__dirname, 'resources/confluencePencilReport_model.json');
    
    // if (fs.existsSync(modelPath)) {
    //   const data = fs.readFileSync(modelPath, 'utf-8');
    //   confluencePencilReport = JSON.parse(data);
    //   console.log('✅ confluencePencilReport model loaded successfully');
    // } else {
    //   console.warn('⚠️ confluencePencilReport model not found, continuing without it');
    // }

    //now using loadJSONFile from fileLoader.js
    console.log('Loading confluencePencilReport model...');
    // Import loadJSONFile first
    const { loadJSONFile } = await import('./fileLoader.js');
    confluencePencilReport = await loadJSONFile('./resources/confluencePencilReport_model.json');
    console.log('✅ confluencePencilReport model loaded successfully');


} catch (error) {
    console.warn('⚠️ confluencePencilReport model could not be loaded, continuing without it:', error.message);
}

/**
 * Processes text with two callback functions
 * @param {string} text - The input text to process
 * @param {Function} callBackEach - The first callback function to execute with the text, will be called multiple times through the process
 * @param {Function} callBackAll - The second callback function to execute with the text, will be called once at the end of the process
 * @returns {void}
 */
export function runAnalysis(text, callBackEach, callBackAll) {
  if (typeof text !== 'string') {
    throw new Error('Text parameter must be a string');
  }
  
  if (typeof callBackEach !== 'function') {
    throw new Error('callBackEach parameter must be a function');
  }
  
  if (typeof callBackAll !== 'function') {
    throw new Error('callBackAll parameter must be a function');
  }

  callBackEach({
    type:"communication",
    value:`Communication stablished 👌🏼`
  });
    
  // Use LLM to process the text
  buildPromptAndSend(
    [],
    'Summarize in one sentence the following text: '+text,
    'o3m-h-100k',
    (response) => {
      callBackEach({
        type:"proxy_test",
        value:`LLM Analysis Result (summary of text): ${response.content}`
      });

      callBackAll({
        type:"json_report",
        value:confluencePencilReport
      });
    },
    false,
    'testing the LLM proxy'
  );
}

// Export LLMsKirigami functions for direct access
export {
    buildPromptAndSend,
    llm_completion_with_insertions,
    getLLMActivitiesReport,
    TOTAL_COST_SESSION
};

// Export the loaded model for external access
export { confluencePencilReport };

// Default export
export default runAnalysis; 
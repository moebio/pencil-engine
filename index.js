// Import LLMsKirigami functions
import {
    buildPromptAndSend,
    llm_completion_with_insertions,
    getLLMActivitiesReport,
    TOTAL_COST_SESSION
} from './libraries/LLMsKirigami.js';

// Import net variable from Build.js
import { net } from './engine/Build.js';

// Import PencilReport.js to get access to pencilSectionsExtraction function
import './engine/PencilReport.js';

// Load and parse the confluencePencilReport model at module initialization
//let confluencePencilReport = null;




// Use an immediately invoked async function to handle the async operations
(async function initialize() {
    try {
        console.log('🚀 Starting initialization...');

        //now using loadJSONFile from fileLoader.js
        //console.log('📁 Loading confluencePencilReport model...');
        // Import loadJSONFile first
        // const { loadJSONFile } = await import('./fileLoader.js');
        // console.log('✅ loadJSONFile imported successfully');
        
        // confluencePencilReport = await loadJSONFile('./resources/confluencePencilReport_model.json');
        // console.log('✅ confluencePencilReport model loaded successfully');

        // Load data from LoadPencil
        console.log('🔧 Loading Pencil tables...');
        const { load } = await import('./engine/LoadPencil.js');
        console.log('✅ LoadPencil module imported successfully');
        
        console.log('🚀 About to call load() function...');
        await load();
        console.log('✅ load() function completed successfully');

        console.log("net:", net)

    } catch (error) {
        console.error('❌ Error during initialization:', error);
        console.error('Error stack:', error.stack);
    }
})();

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

  if(net){
    callBackEach({
      type:"communication",
      value:"starting analysis..."
    });
  } else {
    callBackEach({
      type:"communication",
      value:"still no ready for analysis"
    });
    return
  }

  pencilSectionsExtraction(text, callBackEach, callBackAll)
}

// Export LLMsKirigami functions for direct access
export {
    buildPromptAndSend,
    llm_completion_with_insertions,
    getLLMActivitiesReport,
    TOTAL_COST_SESSION
};

// Export the loaded model for external access
//export { confluencePencilReport };

// Default export
export default runAnalysis;
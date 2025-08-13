/**
 * Processes text with two callback functions
 * @param {string} text - The input text to process
 * @param {Function} callbackEach - The first callback function to execute with the text, will be called multiple times through the process
 * @param {Function} callBackAll - The second callback function to execute with the text, will be called once at the end of the process
 * @returns {void}
 */
export function runAnalysis(text, callbackEach, callBackAll) {
  if (typeof text !== 'string') {
    throw new Error('Text parameter must be a string');
  }
  
  if (typeof callbackEach !== 'function') {
    throw new Error('callbackEach parameter must be a function');
  }
  
  if (typeof callBackAll !== 'function') {
    throw new Error('callBackAll parameter must be a function');
  }
  console.log('starting analysis simulation...(analysis will take 4 seconds)');
  // Execute the callbacks with the text
  setTimeout(() => {
    //uses LLMs to process the text
    //…
    callbackEach("Result 1 for 1st callback (each)");
  }, 2000);

  setTimeout(() => {
    //uses LLMs to process the text
    //…
    callbackEach("Result 2 for 1st callback (each)");
  }, 3000);

  setTimeout(() => {
    //uses LLMs to process the text
    //…
    callBackAll("Result for 2nd callback (all)");
  }, 4000);
  
}

// Default export
export default runAnalysis; 
// Node.js compatible wrapper for pulse.js
// This creates a proper global _ object for Node.js environment

// Create a global _ object
global._ = {};

// Read and execute the pulse.js file
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the pulse.js file
const pulseCode = fs.readFileSync(path.join(__dirname, 'pulse.js'), 'utf8');

// Create a context that mimics the browser environment
const context = {
  // Global objects
  global: global,
  window: global,
  self: global,
  
  // Module system
  exports: global._,
  module: { exports: global._ },
  
  // Functions that might be expected
  define: undefined, // No AMD
  require: (id) => {
    if (id === 'fs') return fs;
    if (id === 'path') return path;
    throw new Error(`Module ${id} not found`);
  },
  
  // Console
  console: console,
  
  // Other globals that might be expected
  setTimeout: setTimeout,
  setInterval: setInterval,
  clearTimeout: clearTimeout,
  clearInterval: clearInterval,
  Date: Date,
  Math: Math,
  JSON: JSON,
  Array: Array,
  Object: Object,
  String: String,
  Number: Number,
  Boolean: Boolean,
  Function: Function,
  Error: Error,
  RegExp: RegExp
};

// Execute the pulse code in the context
try {
  // Create a function that will run the pulse code
  const executeCode = new Function(
    ...Object.keys(context),
    pulseCode
  );
  
  // Execute with the context
  executeCode.apply(global, Object.values(context));
  
  console.log('✅ Pulse library loaded successfully in Node.js');
  console.log('Available functions:', Object.keys(global._).slice(0, 10), '...');
  
} catch (error) {
  console.error('❌ Error loading pulse library:', error);
  console.error('Stack:', error.stack);
}

// Export the global _ object
const pulseLibrary = global._;
export default pulseLibrary;
export { pulseLibrary as _ };

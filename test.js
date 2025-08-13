import { runAnalysis } from './index.js';

// Example usage
console.log('Testing pencil-engine module...\n');

// Test 1: Basic functionality
console.log('\nstarts test')

runAnalysis('Hello, World!', 
  (text) => {
    console.log('CallbackEach received text:', text);
  },
  (text) => {
    console.log('CallbackAll received text:', text);
  }
)


import { runAnalysis, buildPromptAndSend, llm_completion_with_insertions } from './index.js';

// Example usage
console.log('Testing pencil-engine module...\n');

// Test 1: Basic functionality (simulation mode)
console.log('\n=== Test 1: Basic functionality (simulation mode) ===');
runAnalysis('Hello, World!', 
  (text) => {
    console.log('CallbackEach received text:', text);
  },
  (text) => {
    console.log('CallbackAll received text:', text);
  }
);

// Test 2: LLM functionality
console.log('\n=== Test 2: LLM functionality ===');
runAnalysis('Hello, World!', 
  (text) => {
    console.log('LLM CallbackEach received text:', text);
  },
  (text) => {
    console.log('LLM CallbackAll received text:', text);
  },
  true // Enable LLM processing
);

// Test 3: Direct LLM usage
console.log('\n=== Test 3: Direct LLM usage ===');
buildPromptAndSend(
  [
    { anchor: '{{name}}', content: 'Developer' },
    { anchor: '{{language}}', content: 'JavaScript' }
  ],
  'Hello {{name}}! Write a simple "Hello World" program in {{language}}.',
      'gpt4o',
  (response) => {
    console.log('Direct LLM response:', response.content);
  },
  false,
  'Hello World program generation'
);

console.log('\nAll tests started. Check the console for responses...');


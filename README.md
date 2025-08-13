# Pencil Engine

A simple JavaScript module that processes text with a callback function.

## Installation

```bash
npm install
```

## Usage

### Import the module

```javascript
import { runAnalysis } from './index.js';
// or
import runAnalysis from './index.js';
```

### Use the function

```javascript
runAnalysis('Your text here', (text) => {
  // Do something with the text
  console.log('Processed:', text);
});
```

## API

### `runAnalysis(text, callback)`

- **text** (string): The input text to process
- **callback** (function): The callback function that receives the text as a parameter

## Example

```javascript
import { runAnalysis } from './index.js';

runAnalysis('Hello, World!', (text) => {
  console.log('Received:', text);
  console.log('Length:', text.length);
  console.log('Uppercase:', text.toUpperCase());
});
```

## Testing

Run the test file to see examples:

```bash
npm test
```

## License

MIT 
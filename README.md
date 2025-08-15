# Pencil Engine

A JavaScript module that processes text using LLM (Large Language Model) analysis with callback functions.

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
runAnalysis('Your text here', 
  (result) => {
    // This callback is called multiple times during processing
    console.log('Intermediate result:', result);
  },
  (finalResult) => {
    // This callback is called once at the end
    console.log('Final result:', finalResult);
  }
);
```

## API

### `runAnalysis(text, callbackEach, callBackAll)`

- **text** (string): The input text to process
- **callbackEach** (function): Callback function called multiple times during processing
- **callBackAll** (function): Callback function called once at the end

### Callback Response Types

The callbacks receive objects with the following structure:

```javascript
{
  type: "communication" | "proxy_test" | "json_report" | "completion",
  value: string | object
}
```

## Example

```javascript
import { runAnalysis } from './index.js';

runAnalysis('Hello, World!', 
  (result) => {
    console.log('Processing:', result.type, result.value);
  },
  (finalResult) => {
    console.log('Analysis complete:', finalResult.type, finalResult.value);
  }
);
```

## Features

- **LLM Integration**: Uses external LLM services for text analysis
- **Cost Tracking**: Monitors API usage costs
- **Response Caching**: Avoids duplicate API calls
- **Model Support**: Optional integration with custom models
- **Error Handling**: Graceful fallbacks when resources are unavailable

## Testing

Run the test file to see examples:

```bash
npm test
```

## License

MIT 
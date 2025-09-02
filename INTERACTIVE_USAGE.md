# Interactive Usage Guide

This guide shows you how to run the Pencil Engine in Node.js with full console access.

## Quick Start

### Option 1: Using npm scripts (Recommended)
```bash
# Start the advanced REPL with full console access
npm start
# or
npm run repl

# Start the simple interactive mode
npm run interactive
```

### Option 2: Direct execution
```bash
# Advanced REPL (recommended for development)
node run-repl.js

# Simple interactive mode
node run-interactive.js
```

## Available Modes

### 1. REPL Mode (`run-repl.js`)
- **Best for**: Development and testing
- **Features**: 
  - Full Node.js REPL with syntax highlighting
  - Tab completion
  - Command history (up/down arrows)
  - Multi-line input support
  - All functions available in global scope

**Usage:**
```bash
npm start
```

Then in the REPL:
```javascript
// Test the main function
example()

// Use runAnalysis directly
runAnalysis("Your text here", (data) => console.log(data), (data) => console.log("Done:", data))

// Use pulse.js functions
const net = new _.Net()
const list = new _.nL()
const table = _.CSVToTable("name,age\nJohn,25", true)

// Get help
help()
```

### 2. Simple Interactive Mode (`run-interactive.js`)
- **Best for**: Quick testing
- **Features**:
  - Basic console input
  - All functions available
  - Simple command interface

## Available Functions

### Main Functions
- `runAnalysis(text, callBackEach, callBackAll)` - Main text analysis function
- `help()` - Show available commands
- `example()` - Run a test analysis

### Pulse.js Library Functions (via `_` object)
- `_.CSVToTable(data, flag)` - Parse CSV data
- `new _.Net()` - Create a network
- `new _.nL()` - Create a number list
- `_.interpolateColors(color1, color2, factor)` - Interpolate colors
- And 570+ other functions...

## Example Session

```bash
$ npm start
🚀 Starting Pencil Engine REPL...
📊 Pulse library loaded with 575 functions

pencil> help()
📋 Available Commands:
  runAnalysis(text, callBackEach, callBackAll) - Main analysis function
  _.CSVToTable(data, flag) - Parse CSV data
  new _.Net() - Create a network
  new _.nL() - Create a number list
  _.interpolateColors(color1, color2, factor) - Interpolate colors
  help() - Show this help
  example() - Run example analysis

pencil> example()
🧪 Running example analysis...
📝 Progress: { type: 'communication', value: 'Communication stablished 👌🏼' }
📝 Progress: { type: 'communication', value: 'starting analysis...' }
✅ Analysis complete: [analysis results...]

pencil> const net = new _.Net()
undefined
pencil> net.createNode("test", "Test Node")
[Nd object...]

pencil> .exit
👋 Goodbye!
```

## Tips

1. **Use REPL mode** for development - it has better features
2. **Use `.exit` or Ctrl+C** to quit the REPL
3. **Use `help()`** to see available commands
4. **Use `example()`** to test the main functionality
5. **All pulse.js functions** are available via the `_` object
6. **Tab completion** works in REPL mode for function names

## Troubleshooting

If you get errors:
1. Make sure you're in the project directory
2. Ensure all dependencies are installed: `npm install`
3. Check that the pulse library loaded correctly (should show "575 functions")
4. Use `help()` to verify functions are available

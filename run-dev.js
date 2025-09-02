#!/usr/bin/env node

// Development runner that reloads modules on each restart
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🔄 Development mode - modules will be fresh on each restart');
console.log('💡 Make your changes, then press Enter to restart with fresh modules');
console.log('💡 Or type "exit" to quit');
console.log('');

function startFresh() {
    console.log('🚀 Starting fresh REPL...');
    console.log('─'.repeat(50));
    
    const child = spawn('node', ['run-repl.js'], {
        stdio: 'inherit',
        cwd: __dirname
    });
    
    child.on('close', (code) => {
        console.log('─'.repeat(50));
        console.log(`REPL exited with code ${code}`);
        console.log('Press Enter to restart with fresh modules, or type "exit" to quit:');
    });
    
    return child;
}

// Start the first instance
let currentProcess = startFresh();

// Handle user input for restarting
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
    const input = data.trim().toLowerCase();
    
    if (input === 'exit' || input === 'quit') {
        console.log('👋 Goodbye!');
        if (currentProcess) {
            currentProcess.kill();
        }
        process.exit(0);
    } else {
        // Restart with fresh modules
        if (currentProcess) {
            currentProcess.kill();
        }
        currentProcess = startFresh();
    }
});

console.log('Press Enter to restart with fresh modules, or type "exit" to quit:');

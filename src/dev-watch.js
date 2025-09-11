#!/usr/bin/env node

// Development watcher that restarts REPL when files change
import { spawn } from 'child_process';
import { watch } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let currentProcess = null;
let isRestarting = false;

function startREPL() {
    if (currentProcess) {
        console.log('🔄 Stopping current REPL...');
        currentProcess.kill();
    }
    
    console.log('🚀 Starting fresh REPL...');
    console.log('─'.repeat(50));
    
    currentProcess = spawn('node', ['run-repl.js'], {
        stdio: 'inherit',
        cwd: __dirname
    });
    
    currentProcess.on('close', (code) => {
        if (!isRestarting) {
            console.log('─'.repeat(50));
            console.log(`REPL exited with code ${code}`);
        }
    });
}

function restartREPL() {
    if (isRestarting) return;
    
    isRestarting = true;
    console.log('\n📝 File changed - restarting REPL...');
    
    setTimeout(() => {
        startREPL();
        isRestarting = false;
    }, 500); // Small delay to avoid rapid restarts
}

// Watch for changes in key files
const filesToWatch = [
    'index.js',
    'engine/Build.js',
    'engine/LoadPencil.js',
    'engine/PencilReport.js',
    'libraries/pulse-node.js',
    'run-repl.js'
];

console.log('👀 Watching files for changes...');
console.log('📁 Files being watched:', filesToWatch.join(', '));
console.log('💡 Make changes to any file and the REPL will auto-restart');
console.log('💡 Press Ctrl+C to stop watching');
console.log('');

filesToWatch.forEach(file => {
    const filePath = join(__dirname, file);
    try {
        watch(filePath, (eventType) => {
            if (eventType === 'change') {
                console.log(`📝 ${file} changed`);
                restartREPL();
            }
        });
        console.log(`✅ Watching: ${file}`);
    } catch (error) {
        console.log(`⚠️  Could not watch: ${file} (${error.message})`);
    }
});

// Start the initial REPL
startREPL();

// Handle cleanup
process.on('SIGINT', () => {
    console.log('\n👋 Stopping file watcher...');
    if (currentProcess) {
        currentProcess.kill();
    }
    process.exit(0);
});

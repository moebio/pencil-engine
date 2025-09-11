#!/usr/bin/env node

// Clear module cache and restart REPL
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🧹 Clearing module cache and starting fresh REPL...');

// Kill any existing Node processes (optional)
process.on('SIGINT', () => {
    console.log('\n👋 Goodbye!');
    process.exit(0);
});

// Start fresh REPL
const child = spawn('node', ['run-repl.js'], {
    stdio: 'inherit',
    cwd: __dirname,
    env: {
        ...process.env,
        NODE_OPTIONS: '--max-old-space-size=4096'
    }
});

child.on('close', (code) => {
    console.log(`\nREPL exited with code ${code}`);
    process.exit(code);
});

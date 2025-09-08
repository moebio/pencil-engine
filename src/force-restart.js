#!/usr/bin/env node

// Force restart by killing current process and starting fresh
import { spawn } from 'child_process';

console.log('🔄 Force restarting with fresh modules...');

// Start a completely new process
const child = spawn('node', ['run-repl.js'], {
    stdio: 'inherit',
    detached: true,
    env: {
        ...process.env,
        // Add timestamp to force fresh module loading
        MODULE_TIMESTAMP: Date.now().toString()
    }
});

// Detach the child process
child.unref();

// Exit current process
process.exit(0);

#!/usr/bin/env node

// Advanced REPL runner for Pencil Engine with full console access
import { runAnalysis } from './index.js';
import { _ } from './libraries/pulse-node.js';
import repl from 'repl';

console.log('🚀 Starting Pencil Engine REPL...');
console.log('📊 Pulse library loaded with', Object.keys(_).length, 'functions');
console.log('');

// Create a custom REPL context
const context = repl.start({
    prompt: 'pencil> ',
    useColors: true,
    useGlobal: true
});

// Add all the functions to the REPL context
context.context.runAnalysis = runAnalysis;
context.context._ = _;

// Add helper functions
context.context.help = function() {
    console.log('\n📋 Available Commands:');
    console.log('  runAnalysis(text, callBackEach, callBackAll) - Main analysis function');
    console.log('  _.CSVToTable(data, flag) - Parse CSV data');
    console.log('  new _.Net() - Create a network');
    console.log('  new _.nL() - Create a number list');
    console.log('  _.interpolateColors(color1, color2, factor) - Interpolate colors');
    console.log('  help() - Show this help');
    console.log('  example() - Run example analysis');
    console.log('');
    console.log('📊 Pulse library functions available via _ object:');
    console.log('  Total functions:', Object.keys(_).length);
    console.log('  Sample functions:', Object.keys(_).slice(0, 10).join(', '), '...');
    console.log('');
};

context.context.example = function() {
    console.log('\n🚀 Starting fresh analysis with updated code... (Intro+Discussion)');
    
    const text = `Introduction
    Thus, in the present study, we set out (i) to characterize the lymphoid cells found in the myocardium and heart-draining lymph nodes of healthy (unimmunized/uninfected) mice at different ages and (ii) to investigate in which ways the activity of such lymphocytes could influence the myocardial aging process.
    
    Discussion
    In the present study, we observed that a smallpopulation of B and T lymphocytes can also be consistentlyfound in the myocardial parenchyma of healthy mice.Although lymphocytes are best characterized in the blood,lymphatic fluid, and lymphoid organs, interest in tissue-residentlymphocytes is currently emerging (33–37). Different lymphocytepopulations have now been described in several nonlymphoidorgans, where they can influence the local molecular milieu andmodulate other resident cells (38–41). For instance, Tregs foundin the skeletal muscle can signal to local satellite (progenitor)cells and mediate tissue renewal (41) whereas conventionalhippocampal T cells can modulate neuronal synapse plasticity(39). In the present study, we confirmed that the heart is not anexception and that lymphocytes indeed seed the myocardiumunder steady-state conditions.Holzinger et al`;
    
    function callBackEach(data) {
        console.log('📝 Progress:', data.type);
        console.log(JSON.stringify(data.value, null, 2));
    }
    
    function callBackAll(data) {
        console.log('✅ Analysis complete:', data.type);
        console.log(JSON.stringify(data.value, null, 2));
    }
    
    runAnalysis(text, callBackEach, callBackAll);
};

// Show welcome message
console.log('🎯 REPL ready! Available functions:');
console.log('  - runAnalysis() for text analysis');
console.log('  - _ object for pulse.js functions');
console.log('  - help() for command list');
console.log('  - example() to run a test');
console.log('');

// Handle REPL exit
context.on('exit', () => {
    console.log('\n👋 Goodbye!');
    process.exit();
});

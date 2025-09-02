// Import pulse library - will be loaded inside the load function
let _;

// Import onLoadTablesPencil from Build.js
import { onLoadTablesPencil } from './Build.js';

const guidelines_table_url =  "guidelines.csv"
const models_table_url = "models.csv"
const prompts_table_url = "prompts.csv"
const prompts_units_and_sections_table_url = "prompts_units_sections.csv"
const questions_table_url =  "questions.csv"
const sections_table_url =  "sections.csv"
const units_table_url =  "units.csv"


let load = async function(){
    console.log("start Loading Pencil tables...");

    // Resolve global pulse reference first
    if (typeof global !== 'undefined' && global._) {
        _ = global._;
    }

    // Import pulse library for Node.js compatibility
    try {
        const { _: pulseLibrary } = await import('../libraries/pulse-node.js');
        global._ = pulseLibrary;
        console.log("✅ Pulse library imported successfully for Node.js");
    } catch (error) {
        console.error("❌ Failed to import pulse library:", error);
    }

    // If pulse is missing or incomplete, create a minimal fallback and bind to local _
    if (typeof _ === 'undefined' || typeof _.CSVToTable !== 'function') {
        console.log("⚠️ Pulse library not loaded or missing CSVToTable. Creating fallback _ object.");
        global._ = {
            CSVToTable: function(data, flag) {
                console.log("Fallback CSVToTable called with data length:", data ? data.length : 'undefined');
                console.log("Flag:", flag);

                if (!data) return { get: () => [] };

                const lines = data.split('\n').filter(line => line.trim());
                if (lines.length === 0) return { get: () => [] };

                const headers = lines[0].split(',').map(h => h.trim());
                const rows = lines.slice(1).map(line => {
                    const values = line.split(',').map(v => v.trim());
                    const row = {};
                    headers.forEach((header, i) => {
                        row[header] = values[i] || '';
                    });
                    return row;
                });

                const table = {
                    get: function(columnName) {
                        return rows.map(row => row[columnName] || '');
                    }
                };

                table[0] = headers;
                return table;
            }
        };
        _ = global._;
        console.log("✅ Fallback _ object created and bound successfully");
    }

    console.log("✅ Pulse library ready. CSVToTable:", typeof _.CSVToTable);

    try {
        // Import loadTextFile first
        const { loadTextFile } = await import('../fileLoader.js');
        
        const promptsData = await loadTextFile('./data/' + prompts_table_url);
        let promptsTable = _.CSVToTable(promptsData, true);

        const questionsData = await loadTextFile('./data/' + questions_table_url);
        let questionsTable = _.CSVToTable(questionsData, true);

        const unitsData = await loadTextFile('./data/' + units_table_url);
        let unitsTable = _.CSVToTable(unitsData, true);

        const sectionsData = await loadTextFile('./data/' + sections_table_url);
        let sectionsTable = _.CSVToTable(sectionsData, true);

        const promptsUnitsAndSectionsData = await loadTextFile('./data/' + prompts_units_and_sections_table_url);
        let promptsUnitsAndSectionsTable = _.CSVToTable(promptsUnitsAndSectionsData, true);

        const guidelinesData = await loadTextFile('./data/' + guidelines_table_url);
        let guidelinesTable = _.CSVToTable(guidelinesData, true);

        const modelsData = await loadTextFile('./data/' + models_table_url);
        let modelsTable = _.CSVToTable(modelsData, true);

        console.log("✅ All tables loaded successfully, calling onLoadTablesPencil...");
        onLoadTablesPencil(questionsTable, unitsTable, sectionsTable, promptsTable, promptsUnitsAndSectionsTable, guidelinesTable, modelsTable);
        console.log("✅ onLoadTablesPencil completed successfully");
        
    } catch (error) {
        console.error("Error loading tables:", error);
        throw error;
    }
}

// Export the load function
export { load };
export default load;
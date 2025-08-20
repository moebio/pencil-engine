/**
 * Hybrid File Loader Utility
 * Automatically detects environment and uses appropriate loading method:
 * - Local/Development: Uses fetch API for local file serving
 * - Service/Production: Uses Node.js fs module for server-side file access
 */

/**
 * Detects the current environment
 * @returns {Object} Environment information
 */
function detectEnvironment() {
  const isNode = typeof process !== 'undefined' && process.versions && process.versions.node;
  const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
  const isServiceWorker = typeof ServiceWorkerGlobalScope !== 'undefined' && self instanceof ServiceWorkerGlobalScope;
  
  const environmentObject = {
    isNode,
    isBrowser,
    isServiceWorker,
    environment: isNode ? 'node' : isServiceWorker ? 'service-worker' : 'browser'
  }
  console.log('Environment detected:', environmentObject);
  
  return environmentObject;
}

/**
 * Loads a file using Node.js fs module (for service environments)
 * @param {string} filePath - Path to the file
 * @returns {Promise<Object>} File content and metadata
 */
async function loadFileNode(filePath) {
  try {
    // Dynamic import for Node.js modules
    const fs = await import('fs');
    const path = await import('path');
    
    // Resolve the file path relative to the current working directory
    const resolvedPath = path.resolve(filePath);
    
    if (!fs.existsSync(resolvedPath)) {
      throw new Error(`File not found: ${resolvedPath}`);
    }
    
    const stats = fs.statSync(resolvedPath);
    const data = fs.readFileSync(resolvedPath, 'utf-8');
    
    return {
      content: data,
      metadata: {
        size: stats.size,
        lastModified: stats.mtime,
        path: resolvedPath
      }
    };
  } catch (error) {
    throw new Error(`Node.js file loading failed: ${error.message}`);
  }
}

/**
 * Loads a file using fetch API (for local/browser environments)
 * @param {string} filePath - Path to the file
 * @returns {Promise<Object>} File content and metadata
 */
async function loadFileFetch(filePath) {
  try {
    const response = await fetch(filePath);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const content = await response.text();
    const metadata = {
      size: response.headers.get('content-length'),
      lastModified: response.headers.get('last-modified'),
      path: filePath,
      url: response.url
    };
    
    return { content, metadata };
  } catch (error) {
    throw new Error(`Fetch file loading failed: ${error.message}`);
  }
}

/**
 * Universal file loader that automatically chooses the right method
 * @param {string} filePath - Path to the file
 * @returns {Promise<Object>} File content and metadata
 */
async function loadFileUniversal(filePath) {
  const env = detectEnvironment();

  console.log('Environment detected:', env);
  
  try {
    if (env.isNode) {
      console.log(`🖥️  Using Node.js fs module for: ${filePath}`);
      return await loadFileNode(filePath);
    } else {
      console.log(`🌐 Using fetch API for: ${filePath}`);
      return await loadFileFetch(filePath);
    }
  } catch (error) {
    console.error(`❌ File loading failed for ${filePath}:`, error.message);
    throw error;
  }
}

/**
 * Loads a local JSON file and returns the parsed data
 * @param {string} filePath - Path to the JSON file
 * @returns {Promise<Object>} Parsed JSON data
 */
export async function loadJSONFile(filePath) {
  console.log('Loading JSON file...');
  try {
    const { content } = await loadFileUniversal(filePath);
    const data = JSON.parse(content);
    console.log(`✅ JSON file loaded successfully: ${filePath}`);
    return data;
  } catch (error) {
    console.error(`❌ Error loading JSON file ${filePath}:`, error.message);
    throw error;
  }
}

/**
 * Loads a local text file and returns the content as a string
 * @param {string} filePath - Path to the text file
 * @returns {Promise<string>} File content as string
 */
export async function loadTextFile(filePath) {
  try {
    const { content } = await loadFileUniversal(filePath);
    console.log(`✅ Text file loaded successfully: ${filePath}`);
    return content;
  } catch (error) {
    console.error(`❌ Error loading text file ${filePath}:`, error.message);
    throw error;
  }
}

/**
 * Loads a local file and returns it as an ArrayBuffer (useful for binary files)
 * @param {string} filePath - Path to the file
 * @returns {Promise<ArrayBuffer>} File content as ArrayBuffer
 */
export async function loadBinaryFile(filePath) {
  try {
    const env = detectEnvironment();
    
    if (env.isNode) {
      // For Node.js, read as buffer and convert to ArrayBuffer
      const fs = await import('fs');
      const path = await import('path');
      const resolvedPath = path.resolve(filePath);
      const buffer = fs.readFileSync(resolvedPath);
      const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
      console.log(`✅ Binary file loaded successfully: ${filePath}`);
      return arrayBuffer;
    } else {
      // For browser, use fetch with arrayBuffer
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const arrayBuffer = await response.arrayBuffer();
      console.log(`✅ Binary file loaded successfully: ${filePath}`);
      return arrayBuffer;
    }
  } catch (error) {
    console.error(`❌ Error loading binary file ${filePath}:`, error.message);
    throw error;
  }
}

/**
 * Loads a local file and returns it as a Blob
 * @param {string} filePath - Path to the file
 * @returns {Promise<Blob>} File content as Blob
 */
export async function loadFileAsBlob(filePath) {
  try {
    const env = detectEnvironment();
    
    if (env.isNode) {
      // For Node.js, read as buffer and create a Blob-like object
      const fs = await import('fs');
      const path = await import('path');
      const resolvedPath = path.resolve(filePath);
      const buffer = fs.readFileSync(resolvedPath);
      
      // Create a Blob-like object for Node.js compatibility
      const blob = {
        size: buffer.length,
        type: 'application/octet-stream',
        arrayBuffer: () => Promise.resolve(buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength)),
        text: () => Promise.resolve(buffer.toString('utf-8'))
      };
      
      console.log(`✅ File loaded as blob successfully: ${filePath}`);
      return blob;
    } else {
      // For browser, use fetch with blob
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const blob = await response.blob();
      console.log(`✅ File loaded as blob successfully: ${filePath}`);
      return blob;
    }
  } catch (error) {
    console.error(`❌ Error loading file as blob ${filePath}:`, error.message);
    throw error;
  }
}

/**
 * Loads multiple files in parallel
 * @param {Array<string>} filePaths - Array of file paths to load
 * @param {string} fileType - Type of files to load ('json', 'text', 'binary', 'blob')
 * @returns {Promise<Array>} Array of loaded file contents
 */
export async function loadMultipleFiles(filePaths, fileType = 'text') {
  try {
    const loadPromises = filePaths.map(filePath => {
      switch (fileType) {
        case 'json':
          return loadJSONFile(filePath);
        case 'text':
          return loadTextFile(filePath);
        case 'binary':
          return loadBinaryFile(filePath);
        case 'blob':
          return loadFileAsBlob(filePath);
        default:
          throw new Error(`Unsupported file type: ${fileType}`);
      }
    });
    
    const results = await Promise.all(loadPromises);
    console.log(`✅ Loaded ${results.length} files successfully`);
    return results;
  } catch (error) {
    console.error('❌ Error loading multiple files:', error.message);
    throw error;
  }
}

/**
 * Loads a file with retry logic
 * @param {string} filePath - Path to the file
 * @param {Function} loadFunction - Function to use for loading (e.g., loadJSONFile, loadTextFile)
 * @param {number} maxRetries - Maximum number of retry attempts
 * @param {number} delay - Delay between retries in milliseconds
 * @returns {Promise<any>} Loaded file content
 */
export async function loadFileWithRetry(filePath, loadFunction, maxRetries = 3, delay = 1000) {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await loadFunction(filePath);
    } catch (error) {
      lastError = error;
      console.warn(`⚠️ Attempt ${attempt} failed for ${filePath}:`, error.message);
      
      if (attempt < maxRetries) {
        console.log(`🔄 Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  throw new Error(`Failed to load ${filePath} after ${maxRetries} attempts. Last error: ${lastError.message}`);
}

/**
 * Checks if a file exists and is accessible
 * @param {string} filePath - Path to the file
 * @returns {Promise<boolean>} True if file exists and is accessible
 */
export async function fileExists(filePath) {
  try {
    const env = detectEnvironment();
    
    if (env.isNode) {
      const fs = await import('fs');
      const path = await import('path');
      const resolvedPath = path.resolve(filePath);
      return fs.existsSync(resolvedPath);
    } else {
      const response = await fetch(filePath, { method: 'HEAD' });
      return response.ok;
    }
  } catch (error) {
    return false;
  }
}

/**
 * Gets file information (size, last modified, etc.)
 * @param {string} filePath - Path to the file
 * @returns {Promise<Object>} File information object
 */
export async function getFileInfo(filePath) {
  try {
    const env = detectEnvironment();
    
    if (env.isNode) {
      const fs = await import('fs');
      const path = await import('path');
      const resolvedPath = path.resolve(filePath);
      
      if (!fs.existsSync(resolvedPath)) {
        throw new Error(`File not found: ${resolvedPath}`);
      }
      
      const stats = fs.statSync(resolvedPath);
      return {
        exists: true,
        size: stats.size,
        lastModified: stats.mtime,
        path: resolvedPath,
        environment: 'node'
      };
    } else {
      const response = await fetch(filePath, { method: 'HEAD' });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return {
        exists: true,
        size: response.headers.get('content-length'),
        lastModified: response.headers.get('last-modified'),
        contentType: response.headers.get('content-type'),
        url: response.url,
        environment: 'browser'
      };
    }
  } catch (error) {
    console.error(`❌ Error getting file info for ${filePath}:`, error.message);
    throw error;
  }
}

/**
 * Gets the current environment information
 * @returns {Object} Environment details
 */
export function getEnvironmentInfo() {
  return detectEnvironment();
}

// Default export with all functions
export default {
  loadJSONFile,
  loadTextFile,
  loadBinaryFile,
  loadFileAsBlob,
  loadMultipleFiles,
  loadFileWithRetry,
  fileExists,
  getFileInfo,
  getEnvironmentInfo
};

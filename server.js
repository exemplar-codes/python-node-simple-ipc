const { spawn } = require('child_process');

function runPythonScript(filename) {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn('python', ['model.py']);

    // Write filename to Python process's standard input
    pythonProcess.stdin.write(`${filename}\n`);

    // Read JSON response from Python process's standard output
    let data = '';
    pythonProcess.stdout.on('data', (chunk) => {
      data += chunk.toString();
    });

    // Handle errors and close events
    pythonProcess.on('error', reject);
    pythonProcess.stdout.on('end', () => {
      try {
        const response = JSON.parse(data);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  });
}

// Example usage
runPythonScript('example.txt')
  .then((response) => {
    console.log('Received response:', response);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

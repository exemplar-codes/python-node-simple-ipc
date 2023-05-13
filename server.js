const readline = require("readline");
const { spawn } = require("child_process");

// Create a readline interface to read input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Spawn a child process to run the Python script as a module
const pythonProcess = spawn("python", ["-m", "model"]);

// Handle input from the console
rl.on("line", (input) => {
  // Send the input to the Python process's standard input
  pythonProcess.stdin.write(`${input}\n`);
});

// Handle output from the Python process
pythonProcess.stdout.on("data", (data) => {
  // Print the output from the Python process to the console
  console.log(data.toString());
});

// Handle errors and close events
pythonProcess.on("error", (error) => {
  console.error("Error:", error);
  process.exit(1);
});

pythonProcess.on("close", () => {
  console.log("Python process closed");
  process.exit(0);
});

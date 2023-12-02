const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

function runEslint(
  directory,
  outputFilePath = "./src/data/eslint-report.json"
) {
  return new Promise((resolve, reject) => {
    const resolvedDirectory = path.resolve(directory);
    const resolvedOutputFilePath = path.resolve(outputFilePath);

    const outputDir = path.dirname(resolvedOutputFilePath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const eslintCommand = `npx eslint "${resolvedDirectory}" --format json --output-file "${resolvedOutputFilePath}"`;

    exec(eslintCommand, (error, stdout, stderr) => {
      resolve();
    });
  });
}

function runESLintProcessor() {
  return new Promise((resolve, reject) => {
    const command = `node ./src/data/dataProcessor.js`;

    exec(command, (error, stdout, stderr) => {
      resolve();
    });
  });
}

function startYarn() {
  console.log("Starting yarn");
  return new Promise((resolve, reject) => {
    exec("yarn start", (error, stdout, stderr) => {
      if (error) {
        console.error(`Error occurred: ${error}`);
        return reject(error);
      }
      if (stderr) {
        console.error(`Error in yarn start execution: ${stderr}`);
        return reject(stderr);
      }
      console.log(stdout);
      resolve();
    });
  });
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log("No path provided. Please provide a path as an argument.");
    return;
  }

  const directoryPath = args[0];

  try {
    await runEslint(directoryPath);
  } catch (error) {}

  try {
    await runESLintProcessor();
  } catch (error) {}

  await startYarn();
}

main();

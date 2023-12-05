const fs = require("fs");

const DIR_PREFIX = process.cwd();

const groupByWarningIssues = (filePath) => {
  const report = JSON.parse(fs.readFileSync(filePath, "utf8"));
  let issuesByRule = {};

  report.forEach((result) => {
    result.messages.forEach((message) => {
      const ruleId = message.ruleId;

      if (ruleId) {
        issuesByRule[ruleId] = (issuesByRule[ruleId] || 0) + 1;
      }
    });
  });

  return issuesByRule;
};

const groupByFileErrors = (filePath) => {
  const report = JSON.parse(fs.readFileSync(filePath, "utf8"));
  let errorsByFile = {};

  report.forEach((result) => {
    const fileName = result.filePath.replace(DIR_PREFIX, "");

    result.messages.forEach((message) => {
      // "fatal" means it has errors
      if ("fatal" in message) {
        errorsByFile[fileName] = (errorsByFile[fileName] || 0) + 1;
      }
    });
  });

  return errorsByFile;
};

// Function to get total number of ESLint issues from the report
const getTotalIssues = (reportPath) => {
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  let totalIssues = 0;
  report.forEach((file) => {
    totalIssues += file.messages.length;
  });
  return totalIssues;
};

const getFilesDetail = (reportPath) => {
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  let data = {};

  report.forEach((result) => {
    const fileName = result.filePath.replace(DIR_PREFIX, "");
    if (result.messages.length === 0) {
      return;
    }

    data[fileName] = { warnings: [], errors: [] };

    result.messages.forEach((message) => {
      // "fatal" means it has errors
      if ("fatal" in message) {
        data[fileName].errors.push(message);
      } else {
        data[fileName].warnings.push(message);
      }
    });
  });

  return data;
};

function main() {
  const data = {};
  const fileName = "./src/data/eslint-report.json";
  const outputFileName = "./src/processedESLint.json";

  console.log("DIR PREFIX: ", DIR_PREFIX);

  data["warnings"] = groupByWarningIssues(fileName);
  data["allIssues"] = getTotalIssues(fileName);
  data["errors"] = groupByFileErrors(fileName);
  data["fileDetails"] = getFilesDetail(fileName);

  fs.writeFileSync(outputFileName, JSON.stringify(data, null, 2));
}

main();

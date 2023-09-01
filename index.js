const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "Enter the project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of the project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache", "GPL", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter test instructions:",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

function generateReadmeContent(answers) {
  // Use the answers to generate your README content
  return `# ${answers.projectTitle}
  ## Description
    ${answers.description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## License
    This project is licensed under the ${answers.license} license.

    ## Contributing
    ${answers.contributing}

    ## Tests
    ${answers.tests}

    ## Questions
    For questions about this project, please contact ${answers.email}.
    GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
  `;
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error("Error writing README file:", err);
    } else {
      console.log("README file generated successfully!");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate README content based on answers
      const readmeContent = generateReadmeContent(answers);

      // Write README file
      writeToFile("README.md", readmeContent);
    })
    .catch((error) => {
      console.error("Error initializing app:", error);
    });
}

// Function call to initialize app
init();

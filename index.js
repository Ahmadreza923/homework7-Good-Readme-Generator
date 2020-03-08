const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your Github username?"
      },
      {
        type: "input",
        name: "project",
        message: "What is your project's name?"
      },
      {
        type: "input",
        name: "description",
        message: "Please write a short discription of your project?"
      },
      {
         type: "input",
        name: "licence",
        message: "What kind of licence should your project have?"
      },
      {
        type: "input",
        name: "dependencies",
        message: "What command should be run to install dependecies?"
      },
      {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?"
      },
      {
        type: "input",
        name: "ripo",
        message: "What does the user need to know about using the ripo?"
      }
];


function generateMarkdown(data) {
  return `
# ${data.name}
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)]
(https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
(https://github.com/${data.name}/${data.project})
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install necessary dependencies, run the following command: 
...
${data.dependencies}
...
## Usage
${data.licence}
## License
This project is licensed under the ${data.license} license.
## Contributing
${data.contributing}
## Tests
To run tests, run the following command:
...
${data.test}
...
## Questions
<img src="${data.userAvatar}"
alt="avatar" style="border-radius: 16px" width="30" />
If you have any questions about the repo, open an issue or contact 
[${data.name}](https://api.github.com/users/${data.name}) 
directly at [${data.userEmail}]

`;
}
// function writeToFile(README.md, data) {
// }

// function init() {

// }

// init();
// const api = {
//   getUser(username) {

//   }
// };

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios")

const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile)




function promptUser() {
  return inquirer.prompt(questions).then(function(data) {
      generateMarkdown(data)
       //const queryUrl = `https://github.com/${name}/${project}`;
          const queryUrl = `https://api.github.com/users/${data.name}/repos?per_page=100`;
          axios.get(queryUrl).then(function(res) {})
            writeFileAsync("README.md",generateMarkdown(data), function(err) {
            if (err) {
                     throw err;
                }
        //        // console.log(`Saved ${repoNames.length} repos`);
                });
        //    const repoNames = res.data.foreach(function(repo) {
        //        if (repo===project){
        //            return repo.name;
        //         }
        //    });
     // });
    //   console.log(repoNames)
    //   const repoNamesStr = repoNames.join("\n");
    //   console.log(repoNamesStr)
    //   writeFileAsync("README.md", repoNamesStr, function(err) {
    //     if (err) {
    //       throw err;
    //     }
    //     console.log(`Saved ${repoNames.length} repos`);
    //   });
    // });
  });
}



// fs.writeFile("repos.txt", repoNamesStr, function(err) {
//     if (err) {
//       throw err;
//     }

//     console.log(`Saved ${repoNames.length} repos`);
//   });

 promptUser() 





// function generateReadMe(answers) {
//     return `    
// #${answers.projectName}
// [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)]
// (https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
// (https://github.com/${answers.github}/${answers.projectName})
// ## Description
// ${answers.description}
// ## Table of Contents
// * [Installation](#installation)
// * [Usage](#usage)
// * [License](#license)
// * [Contributing](#contributing)
// * [Tests](#tests)
// * [Questions](#questions)
// ## Installation
// To install necessary dependencies, run the following command: 
// ...
// ${answers.installation}
// ...
// ## Usage
// ${answers.usage}
// ## License
// This project is licensed under the ${answers.license} license.
// ## Contributing
// ${answers.contributing}
// ## Tests
// To run tests, run the following command:
// ...
// ${answers.test}
// ...
// ## Questions
// <img src="${answers.userAvatar}"
// alt="avatar" style="border-radius: 16px" width="30" />
// If you have any questions about the repo, open an issue or contact 
// [${answers.github}](https://api.github.com/users/${answers.github}) 
// directly at [${answers.userEmail}]
// `
// }
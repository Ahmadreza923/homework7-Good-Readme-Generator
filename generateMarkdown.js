var generateMarkdown = function generateMarkdown(questions,res) {
    return `
  # ${questions.name}
  [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)]
  (https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
  (https://github.com/${questions.name}/${questions.project})
  ## Description
  ${questions.description}

  ## Table of Contents
  * [Licence](#licence)
  * [Installation](#installation)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## License
  This project is licensed under the ${questions.license} license.
  
  ## Installation
  To install necessary dependencies, run the following command: 
  ...
  ${questions.install}
  ...

  ## Tests
  To run tests, run the following command:
  ...
  ${questions.tests}
  ...

  ## Questions
  The user should know:
  ...
  ${questions.ripo}
  ...

  <img src="${res.data.avatar_url}"
  alt="avatar" style="border-radius: 16px" width="30" />
  If you have any questions about the repo, open an issue or contact 
  [${questions.name}](${res.data.html_url}) 
  directly at [${res.data.email}]
  
  `;
  }
  
  module.exports = generateMarkdown;

  


const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios")
const generateMarkdown = require("./generateMarkdown")
const getUsers = require("./getUsers")
// const util = require("util");
// const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt(getUsers).then(function(questions) {
    const queryUrl = `https://api.github.com/users/${questions.name}`;
    axios.get(queryUrl).then(function(res) {
    fs.writeFile("README.md",generateMarkdown(questions,res), function(err) {
        if (err) {
          throw err;
        }
      });
    })
  });
}
 promptUser() 
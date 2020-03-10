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
        message: "Please write a short description of your project?"
      },
      {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: ["MIT", "APACHE", "GPL", "BSD", "None"]
      },
      {
        type: "input",
        name: "install",
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

module.exports = questions;




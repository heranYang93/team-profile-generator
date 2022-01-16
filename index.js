// Require packages needed for this application
const fs = require("fs"); // file system
const inq = require("inquirer"); // inquirer
const que = require("./lib/questions"); //An array of questions for prompt lines
const emp = require("./lib/employee"); //Make readme template

console.log(que.questionsIntern);
console.log(emp);

// async function init() {
//   // Get user data
//   let userData = "";
//   await i.prompt(questionArr).then((r) => (userData = r));
//   let templateObj = new Templify(userData);
//   templateObj.tableOfContentGen();
//   templateObj.licenseGen(licenseArr);
//   templateObj.contentGen();
//   fs.writeFile("./Generated/README.md", templateObj.allIn, (e, r) => {
//     e ? console.error("Error") : console.log("Done");
//   });
// }

function init() {}

init(); //Run app

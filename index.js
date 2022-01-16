// Require packages needed for this application
const fs = require("fs"); // file system
const inq = require("inquirer"); // inquirer
const que = require("./lib/questions"); //An array of questions for prompt lines
const Template = require("./lib/template");
const headHTML = require("./lib/headHTML");
const tailHTML = require("./lib/tailHTML");

async function init() {
  let htmlContent = headHTML;

  let thisManagerData;
  await inq.prompt(que.questionsManager).then((r) => (thisManagerData = r));
  managerTemp = new Template(
    thisManagerData.managerName,
    "Manager",
    thisManagerData.managerId,
    thisManagerData.managerEmail,
    "Office Number",
    thisManagerData.managerOffice
  );
  htmlContent += managerTemp.make();

  let addition;
  await inq.prompt(que.questionsAdd).then((r) => (addition = r));

  while (addition.createNew !== "Finish") {
    if (addition.createNew === "Add Engineer") {
      let thisEngData;
      await inq.prompt(que.questionsEngineer).then((r) => (thisEngData = r));
      engineerTemp = new Template(
        thisEngData.engName,
        "Engineer",
        thisEngData.engId,
        thisEngData.engEmail,
        "Github",
        thisEngData.engGithub
      );
      htmlContent += engineerTemp.make();
      //add an HTML section for this engineer
      await inq.prompt(que.questionsAdd).then((r) => (addition = r));
    } else {
      let thisIntData;
      await inq.prompt(que.questionsIntern).then((r) => (thisIntData = r));
      internTemp = new Template(
        thisIntData.intName,
        "Intern",
        thisIntData.intId,
        thisIntData.intEmail,
        "School",
        thisIntData.intSchool
      );
      htmlContent += internTemp.make();

      await inq.prompt(que.questionsAdd).then((r) => (addition = r));
    }
  }

  htmlContent += tailHTML;

  fs.writeFile("./dist/pages/index.html", htmlContent, (e, r) => {
    e ? console.error("Error") : console.log("Team Page Created Successfully");
  });
}

init(); //Run app

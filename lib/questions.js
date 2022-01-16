const questionsManager = [
  {
    type: "input",
    message: "Enter \x1b[36mmanager's name \x1b[0m",
    name: "managerName",
  },
  {
    type: "input",
    message: "Enter \x1b[36mmanager's ID \x1b[0m",
    name: "managerId",
  },
  {
    type: "input",
    message: "Enter \x1b[36mmanager's email \x1b[0m",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "Enter \x1b[36mmanager's office number \x1b[0m",
    name: "managerOffice",
  },
];

const questionsAdd = {
  type: "list",
  message:
    "Adding \x1b[36mmore team members \x1b[0m? Select the employee type below or select Finish to conclude the session.",
  name: "createNew",
  choices: ["Add Engineer", "Add Intern", "Finish"],
};

const questionsEngineer = [
  {
    type: "input",
    message: "Enter \x1b[36mengineer's name \x1b[0m",
    name: "engName",
  },
  {
    type: "input",
    message: "Enter the \x1b[36mengineer's ID \x1b[0m",
    name: "engId",
  },
  {
    type: "input",
    message: "Enter the \x1b[36mengineer's email \x1b[0m",
    name: "engEmail",
  },
  {
    type: "input",
    message: "Enter the \x1b[36mengineer's GitHub username \x1b[0m",
    name: "engGithub",
  },
];

const questionsIntern = [
  {
    type: "input",
    message: "Enter \x1b[36mintern's name \x1b[0m",
    name: "intName",
  },
  {
    type: "input",
    message: "Enter the \x1b[36mintern's ID \x1b[0m",
    name: "intId",
  },
  {
    type: "input",
    message: "Enter the \x1b[36mintern's email \x1b[0m",
    name: "intEmail",
  },
  {
    type: "input",
    message: "Enter the \x1b[36mintern's school\x1b[0m",
    name: "intSchool",
  },
];

module.exports = {
  questionsManager,
  questionsEngineer,
  questionsIntern,
  questionsAdd,
};

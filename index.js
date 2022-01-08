const inquirer = require("inquirer");
const fs = require("fs");
const createmyTeamHTML = require("./myTeam");

const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

const employees = [];

async function initProj() {
  const responses = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: `Name of team member?`,
    },
    {
      type: "input",
      name: "id",
      message: `What is the member's ID?`,
    },
    {
      type: "input",
      name: "email",
      message: `What is the member's email?`,
    },
    {
      type: "input",
      name: "officeNumber",
      message: `What is the member's office number?`,
    },
  ]);
  const manager = new Manager(
    responses.name,
    responses.id,
    responses.email,
    responses.officeNumber
  );
  employees.push(manager);
  createmyTeam();
}
function createmyTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Would you like to add another member to your team?",
        choices: ["Intern", "Manager", "Engineer", "None"],
      },
    ])

    .then((answer) => {
      if (answer.role === "Engineer") {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: `What is the engineer's name?`,
            },
            {
              type: "input",
              name: "id",
              message: `What is the engineer's ID number?`,
            },
            {
              type: "input",
              name: "email",
              message: `What is the engineer's email?`,
            },
            {
              type: "input",
              name: "github",
              message: `What is the engineer's Github?`,
            },
          ])

          .then((responses) => {
            let engineer = new Engineer(
              responses.name,
              responses.id,
              responses.email,
              responses.github
            );
            employees.push(engineer);
            createmyTeam();
          });
      }
      if (answer.role === "Intern") {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: `What is the intern's name?`,
            },
            {
              type: "input",
              name: "id",
              message: "What is the intern's id?",
            },
            {
              type: "input",
              name: "email",
              message: `What is the intern's email?`,
            },
            {
              type: "input",
              name: "school",
              message: `Where did/does the intern go to school?`,
            },
          ])

          .then((responses) => {
            let intern = new Intern(
              responses.name,
              responses.id,
              responses.email,
              responses.school
            );
            employees.push(intern);
            createmyTeam();
          });
      }
      if (answer.role === "Manager") {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: `What is the manager's name?`,
            },
            {
              type: "input",
              name: "id",
              message: `What is the manager's id number?`,
            },
            {
              type: "input",
              name: "email",
              message: `What is your manager's email?`,
            },
            {
              type: "input",
              name: "officeNumber",
              message: `What is the manager's office number?`,
            },
          ])

          .then((responses) => {
            let manager = new Manager(
              responses.name,
              responses.id,
              responses.email,
              responses.officeNumber
            );
            employees.push(manager);
            createmyTeam();
          });
      }

      if (answer.role === "None") {
        console.log(employees);
        fs.writeFile("./mySquad.html", createmyTeamHTML(employees), (err) => {
          if (err) {
            throw err;
          }
          console.log("My team page has been built");
        });
      }
    });
}
function writeToFile(data) {
  let profiles = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title> My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css">
    </head>
    
    <body>
        <div class="container container-fluid text-center">
            <div class="jumbotron bg-danger">
                <h1 class="bg-danger text-white">My Team</h1>
            </div>
            <div class = "row">`;
  for (let i = 0; i < data.length; i++) {
    profiles += `
        <div class="col-5">
            <div class="card mx-auto mb-3" style="max-width: 20rem">
            <h5 class="card-header">${data[i].name}<br /><br />${Engineer}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data[i].id}</li>
                <li class="list-group-item">Email Address: ${data[i].email}</li>
                
            </ul>
            </div>
        </div>`;
  }

  // open the myTeam html
}

initProj();

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");

var employees = [];

inquirer
  .prompt([
    {
      type: "imput",
      name: "managerName",
      message: "enter manager name"
    },
    {
      type: "imput",
      name: "managerID",
      message: "enter manager ID"
    },
    {
      type: "imput",
      name: "managerEmail",
      message: "enter manager email"
    },
    {
      type: "imput",
      name: "managerOfficenumber",
      message: "enter manager office number"
    }
  ])
  .then(function(res) {
    const manager = new Manager(
      res.managerName,
      res.managerID,
      res.managerEmail,
      res.managerOfficenumber
    );
    employees.push(manager);
  });

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "manager",
        message: "choose an employee to add",
        choices: ["Engineer", "Intern", "exit"]
      }
    ])
    .then(function(res) {
      switch (res.manager) {
        case "Engineer":
          getEngineerdetails();
          break;
        case "Intern":
          getInterndetails();
          break;
        case "exit":
          process.exit(0);
      }
    });
}

function getEngineerdetails() {
  inquirer
    .prompt([
      {
        type: "imput",
        name: "EngineerName",
        message: "enter engineer name"
      },
      {
        type: "imput",
        name: "engineerID",
        message: "enter engineer ID"
      },
      {
        type: "imput",
        name: "engineerEmail",
        message: "enter engineer email"
      },
      {
        type: "imput",
        name: "engineerGithub",
        message: "enter github user ID"
      }
    ])
    .then(function(res) {
      const engineer = new Engineer(
        res.engineerName,
        res.engineerID,
        res.engineerEmail,
        res.engineerGithub
      );
      employees.push(engineer);
    });

  function getInterndetails() {
    inquirer
      .prompt([
        {
          type: "imput",
          name: "InternName",
          message: "enter interm name"
        },
        {
          type: "imput",
          name: "internID",
          message: "enter intern ID"
        },
        {
          type: "imput",
          name: "internEmail",
          message: "enter intern email"
        },
        {
          type: "imput",
          name: "internSchoolname",
          message: "enter school name"
        }
      ])
      .then(function(res) {
        const intern = new Intern(
          res.internName,
          res.internID,
          res.internEmail,
          res.internSchoolname
        );
        employees.push(intern);
      });
  }
}

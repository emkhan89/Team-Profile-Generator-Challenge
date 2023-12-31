const Manager = require("./lib/Manager");
const Engine = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const Employee = require("./lib/Employee");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const staff = [];

const starterQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "What is the name of the team manager?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the managers employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the managers email address?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "WHat is the managers office number?",
  },
];

const express = require("express");
const inquirer = require("inquirer");

const {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
  updateEmployeeManager,
  viewEmployeesByManager,
  viewEmployeesByDepartment,
  viewDepartmentBudget,
  deleteDepartment,
  deleteRole,
  deleteEmployee,
} = require("./utils/queries");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

init();

// Run the application with node app.js
function init() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Update an employee manager",
          "View employees by manager",
          "View employees by department",
          "View department budget",
          "Delete a department",
          "Delete a role",
          "Delete an employee",
          "Exit"
        ],
      },
    ])
    .then(async (answers) => {
      switch (answers.action) {
        case "View all departments":
          viewAllDepartments();
          break;
        case "View all roles":
          viewAllRoles();
          break;
        case "View all employees":
          viewAllEmployees();
          break;
        case "Add a department":
          await addDepartment();
          break;
        case "Add a role":
          await addRole();
          break;
        case "Add an employee":
          await addEmployee();
          break;
        case "Update an employee role":
          await updateEmployeeRole();
          break;
        case "Update an employee manager":
          await updateEmployeeManager();
          break;
        case "View employees by manager":
          await viewEmployeesByManager();
          break;
        case "View employees by department":
          await viewEmployeesByDepartment();
          break;
        case "View department budget":
          await viewDepartmentBudget();
          break;
        case "Delete a department":
          await deleteDepartment();
          break;
        case "Delete a role":
          await deleteRole();
          break;
        case "Delete an employee":
          await deleteEmployee();
          break;
        case "Exit":
          console.log("Goodbye!");
          process.exit();
      }
    })
    .then(async () => {
      await inquirer
        .prompt([
          {
            type: "confirm",
            name: "continue",
            message: "Would you like to continue?",
          },
        ])
        .then((answers) => {
          if (answers.continue) {
            init();
          } else {
            console.log("Goodbye!");
            process.exit();
          }
        });
    })
    .catch((error) => {
      console.log(error);
    });
}
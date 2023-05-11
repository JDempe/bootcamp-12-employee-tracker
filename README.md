# CBC Week 12 Challenge: Employee Tracker

## Description

This application is a command line interface that allows the user to manage a company's employee database. The user can view, add, update, and delete departments, roles, and employees. The user can also view the total utilized budget of a department. The application uses Node.js, Inquirer, and MySQL.

## Table of Contents

- [Mock Up](#mock-up)
- [Final Product](#final-product)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)

## Mock Up

The following animation provided by the bootcamp materials provides an example of the application command line interface:

<p align="center"><kbd><img src="./assets/12-sql-homework-video-thumbnail.png" alt="example format" style="max-width: 730px;"/> </kbd></p>

The following image shows the example database schema:

<p align="center"><kbd><img src="./assets/12-sql-homework-demo-01.png" alt="example format" style="max-width: 730px;"/> </kbd></p>

## Final Product

The final product can be downloaded at https://github.com/JDempe/bootcamp-12-employee-tracker.

### Prerequisites

To run the application, you will need to have the following installed on your machine:

1. [Node.js](https://nodejs.org/en/)

### Usage Instructions

#### Running the Application Locally

To run the application locally, follow the steps below:

1. Clone the repository to your local machine.
2. At the command line, run `npm install` to install the dependencies.
3. Create a `.env` file in the root directory of the project. Add the following to the file, replacing the values with your MySQL credentials.
   DB_HOST='localhost'
   DB_NAME='employeetracker_db'
   DB_USER='root'
   DB_PASSWORD='<your password>'
4. Create the MySQL Schema using the `schema.sql` file in the `db` directory. You can do this using MySQL Workbench or the command line. If using the command line, run `mysql -u root -p` and enter your password.
5. Run `source db/schema.sql` to create the database.
6. Run `source db/seeds.sql` to seed the database.
7. Type `quit` to exit MySQL.
8. Run `npm run seed` to seed the database.
9. Run `npm start` to start the server.

### User Interface

The user interface is a command line application. The user is presented with a series of prompts to select from. The user can select from the following options:

- View All Departments
- View All Roles
- View All Employees
- Add a Department
- Add a Role
- Add an Employee
- Update an Employee Role
- Update an Employee Manager
- View Employees by Manager
- View Employees by Department
- Delete a Department
- Delete a Role
- Delete an Employee
- View Department Budget
- Exit

The user can select an option by using the up and down arrow keys and pressing enter. Depending on the option selected, the user may be prompted for additional information. The user can exit the application at any time by selecting the `Exit` option.

The following is a video showing each of the options in the application:

https://github.com/JDempe/bootcamp-12-employee-tracker/assets/123279032/0d443ea3-64ac-4123-8d59-206ec371c33f

## Credits
### Resources

The below resources contributed to the project.

- [Node.js](https://nodejs.org/en/) is a JavaScript runtime built on Chrome's V8 JavaScript engine. The file system module is used to read and write files.

- [Express](https://expressjs.com/) is a Node.js web application framework. It is used to serve the static files for the application.

- [Inquirer](https://www.npmjs.com/package/inquirer) is a collection of common interactive command line user interfaces. It is used to prompt the user for input.

- [MySQL](https://www.npmjs.com/package/mysql) is a Node.js driver for MySQL. It is used to connect to the MySQL database.

- [console.table](https://www.npmjs.com/package/console.table) is used to print MySQL rows to the console.

- [dotenv](https://www.npmjs.com/package/dotenv) is used to load environment variables from a .env file into process.env.

- [Stack Overflow](https://stackoverflow.com/) is used to troubleshoot issues encountered with the application.
  - [How to avoid console being deleted](https://stackoverflow.com/questions/63161758/text-in-bash-terminal-getting-overwritten-using-js-node-js-npms-are-inquirer)
  - [Async await in a switch/case statement](https://stackoverflow.com/questions/60279256/async-await-in-switch-case-statement-does-not-work)
  - [Deleting child rows with foreign key constraints](https://stackoverflow.com/questions/21659691/error-1452-cannot-add-or-update-a-child-row-a-foreign-key-constraint-fails)

### Collaborators

On this project, there was no peer review or collaboration.

## License

Refer to the LICENSE in the repository.

## How to Contribute

Contribute at https://github.com/JDempe/bootcamp-12-employee-tracker.

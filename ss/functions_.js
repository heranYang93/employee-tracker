require("dotenv").config();
const inquirer = require("inquirer");
const sql = require("mysql2");

const db = sql.createConnection({
  host: process.env.DB_HOST || "localhost",
  port: 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "Michiam0!",
  database: process.env.DB || "hr_db",
});

db.connect((err) => {
  if (err) throw err;
  console.log(`connected as a id ${db.threadId}`);
});

//start your query

const queryTable = () => {
  inquirer
    .prompt({
      type: "list",
      message: "Select options below",
      name: "op",
      choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "add a department",
        "add a role",
        "add an employee",
        "update an employee",
        "exit",
      ],
    })
    .then((userChoice) => {
      switch (userChoice.op) {
        case "view all departments":
          viewDepartment();
          break;

        case "add an employee":
          addEmployee();
          break;

        case "exit":
          db.end();
          break;
      }
    });
};

const addEmployee = () => {
  db.query(
    "SELECT employees.first_name, employees.last_name, employees.id, roles.title FROM employees LEFT JOIN roles ON employees.id=roles.id",

    (err, res) => {
      if (err) throw err;
      inquirer
        .prompt([
          {
            type: "input",
            name: "first_name",
            message: "input employee first name",
          },
          {
            type: "input",
            name: "last_name",
            message: "input employee last name",
          },
          {
            type: "list",
            name: "role_id",
            choices() {
              res.map(({ title, id }) => {
                return { name: title, value: id };
              });
            },
            message: "select role",
          },
          {
            type: "list",
            name: "manager_id",
            choices() {
              res.map(({ first_name, last_name, id }) => {
                return { name: first_name + " " + last_name, value: id };
              });
            },
            message: "select manager",
          },
        ])
        .then((userAnswer) => {
          db.query("INSERT INTO employees SET ? ", userAnswer, (err, res) => {
            console.log(
              `${userAnswer.first_name} ${userAnswer.last_name} has been added`
            );
          });
        });
      queryTable();
    }
  );
};
//

(async () => {
  await queryTable();
})();

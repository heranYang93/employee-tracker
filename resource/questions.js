const query = require("./query");

const returnToMain = {
  type: "confirm",
  message: "Return to the home page?",
  name: "return",
};

const startQuestion = {
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
};

const newDepartmentArr = {
  type: "input",
  message: "Give a name to the new department",
  name: "newDepartmentName",
};

const newRoleArr = [
  {
    type: "input",
    message: "Give a name to the new role",
    name: "newRoleName",
  },
  {
    type: "input",
    message: "Enter a salary for this new row",
    name: "newRoleSalary",
  },
  {
    type: "list",
    message: "To which department does this new row belong?",
    name: "newRoleDepartment",
    choices: [],
  },
];

const newEmployeeArr = [
  {
    type: "input",
    message: "Enter new employee's first name",
    name: "newEmpFN",
  },
  {
    type: "input",
    message: "Enter new employee's last name",
    name: "newEmpLN",
  },
  {
    type: "list",
    message: "Select the role",
    name: "newEmpRole",
    choices: [],
  },
  {
    type: "list",
    message: `Select a manager`,
    name: "newEmpMan",
    choices: [],
  },
];

const updateEmployeeArr = [
  {
    type: "list",
    message: "Who's role should be updated?",
    name: "updateEmpName",
    choices: [],
  },
  {
    type: "list",
    message: "Assign him/her a new role",
    name: "updateEmpRole",
    choices: [],
  },
];

// const updateManagerArr = [
//   {
//     type: "list",
//     message: "Who's manger should be updated?",
//     name: "empName",
//     choices: [],
//   },
//   {
//     type: "list",
//     message: "Who is the new manager?",
//     name: "newMan",
//     choices: [],
//   },
// ];

module.exports = {
  returnToMain,
  startQuestion,
  newDepartmentArr,
  newRoleArr,
  newEmployeeArr,
  updateEmployeeArr,
  // updateManagerArr,
};

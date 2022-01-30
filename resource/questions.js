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
  ],
};

const departmentQuestion = {
  type: "input",
  message: "Give a name to the new department",
  name: "newDepartmentName",
};

const roleQuestionArr = [
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
    type: "input",
    message: "To which department does this new row belong?",
    name: "newRoleDepartment",
  },
];

const newEmployeeQuestionArr = [
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
    type: "input",
    message: "Enter new employee's role",
    name: "newEmpRole",
  },
  {
    type: "input",
    message: "Enter new employee's manager",
    name: "newEmpManager",
  },
];

class updateEmployee {
  construct() {
    this.questionArr = [
      {
        type: "list",
        message: "Whose status do you wish to update",
        name: "updateEmpName",
        choices: [],
      },
      {
        type: "list",
        message: `Assign a new role`,
        name: "updateEmpRole",
        choices: [],
      },
    ];
  }

  updateQ(employeeArr, roleArr) {
    this.questionArr[0].choices = employeeArr;
    this.questionArr[1].choices = roleArr;
  }
}

module.exports = {
  startQuestion,
  departmentQuestion,
  departmentQuestion,
  roleQuestionArr,
  newEmployeeQuestionArr,
  updateEmployee,
};

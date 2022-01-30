require("dotenv").config();
const sql = require("mysql2");
const inq = require("inquirer");
const Table = require("cli-table");
const q = require("./resource/questions");
const Query = require("./resource/query");
const { query } = require("express");

const db = sql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

const init = async function () {
  await inq.prompt(q.startQuestion).then((r) => {
    switch (r.op) {
      case "view all departments":
        viewResult(Query.departmentView);
        break;
      case "view all roles":
        viewResult(Query.rolesView);
        break;
      case "view all employees":
        viewResult(Query.employeeView);
        break;
      case "add a department":
        inq.prompt(q.newDepartmentArr).then((r) => {
          db.query(Query.addDepartment, r.newDepartmentName, function (er, r) {
            er
              ? console.error("Error when adding new department")
              : console.log(
                  `New department - ${r.newDepartmentName} has been successfully added`
                );
          });
          init();
        });

        break;
      case "add a role":
        db.query(Query.departmentView, function (er, r) {
          let depChoice = [];
          let depIdChoice = [];
          r.forEach((roleObj) => {
            depChoice.push(roleObj.name);
            depIdChoice.push(roleObj.id);
          });
          q.newRoleArr[2].choices = depChoice;
          inq.prompt(q.newRoleArr).then((r) => {
            let depId;
            for (let i = 0; i < depChoice.length; i++) {
              if (depChoice[i] === r.newRoleDepartment) {
                depId = depIdChoice[i];
                break;
              }
            }
            db.query(
              Query.addRole,
              [r.newRoleName, r.newRoleSalary, depId],
              function (er, r) {
                er
                  ? console.error("Error when adding new role")
                  : console.log(
                      `New role - ${r.newRoleName} has been successfully added`
                    );
              }
            );
            init();
          });
        });
        break;
      case "add an employee":
        db.query(Query.employeeSimpleView, function (er, employeeObjArr) {
          let managerFullNameArr = ["undefined"];
          employeeObjArr.forEach((singleEmployeeObject) => {
            managerFullNameArr.push(singleEmployeeObject.full_name);
          });
          q.newEmployeeArr[3].choices = managerFullNameArr;

          db.query(Query.rolesView, function (er, roleObjArr) {
            let roleNameArr = [];
            roleObjArr.forEach((singleRoleObj) => {
              roleNameArr.push(singleRoleObj.title);
            });
            q.newEmployeeArr[2].choices = roleNameArr;

            inq.prompt(q.newEmployeeArr).then((r) => {
              let queryParam;
              let roleId =
                roleObjArr[roleNameArr.indexOf(r.newEmpRole)].role_id;
              let managerId;
              if (r.newEmpMan === "undefined") {
                managerId = null;
              } else {
                managerId =
                  employeeObjArr[managerFullNameArr.indexOf(r.newEmpMan) - 1]
                    .id;
              }
              queryParam = [r.newEmpFN, r.newEmpLN, roleId, managerId];
              db.query(Query.addEmployee, queryParam, function (er, r) {
                er
                  ? console.error("Error when adding new role!")
                  : console.log("New employee has been successfully added!");
              });
              init();
            });
          });
        });
        break;
      case "update an employee":
        break;
      case "exit":
        db.end();
        break;
    }
  });
};

const viewResult = (queryStr) => {
  //Execute query
  db.query(queryStr, function (er, r) {
    //Plot
    makeTable(r);
  });

  init();
};

const makeTable = (queryResponse) => {
  let table = new Table({
    head: Object.keys(queryResponse[0]),
  });
  queryResponse.forEach((obj) => {
    let thisArr = [];
    for (let key in obj) {
      obj[key] ? thisArr.push(obj[key]) : thisArr.push("");
    }
    table.push(thisArr);
  });
  console.log("\n");
  console.log(table.toString());
  console.log("Press ↑ or ↓ to continue");
};

init();

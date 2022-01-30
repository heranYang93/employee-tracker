// const query = require("./query");
// const sql = require("mysql2");
// const Table = require("cli-table");
// const db = sql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB,
// });

// const operation = (r) => {
//   switch (r.op) {
//     case "view all departments":
//       db.query(query.departmentView, function (err, results) {
//         let table = new Table({ head: ["Department id", "Name"] });
//         table.push([0, "Val0"], [1, "Val0"], [2, "Val0"], [3, "Val0"]);
//         console.log(table.toString());
//       });

//       break;
//     case "view all roles":
//       db.query(query.rolesView, function (err, results) {
//         console.log(results);
//       });
//       break;
//     case "view all employees":
//       db.query(query.employeeView, function (err, results) {
//         console.log(results);
//       });
//       break;
//     case "add a department":
//     //   console.log("add a department");
//     case "add a role":
//     //   console.log("add a role");
//     case "add an employee":
//     //   console.log("add an employee");
//     case "update an employee":
//     //   console.log("update an employee");
//   }
// };

// module.exports = { operation };

require("dotenv").config();
const inq = require("inquirer");
const sql = require("mysql2");

const db = sql.createConnection(
  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
  },
  console.log(`Check connection`)
);

// db.query("SELECT * FROM students", function (err, results) {
//   console.log(results);
// });
const init = function () {};

init();

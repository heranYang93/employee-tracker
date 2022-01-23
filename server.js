const inq = require("inquirer");
const sql = require("mysql2");

const db = mysql.createConnection(
  {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
  },
  console.log(`Connected to the classlist_db database.`)
);

db.query("SELECT * FROM students", function (err, results) {
  console.log(results);
});

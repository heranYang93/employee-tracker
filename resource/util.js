require("dotenv").config();
const q = require("./query");
const sql = require("mysql2");
const Table = require("cli-table");
const db = sql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

const viewDepartment = () => {
  console.log("addasdsdafa");
  db.query(q.departmentView, function (err, results) {
    console.log(results);
    //2. make table
    // let table = new Table({ head: ["Department id", "Name"] });
    //     table.push([0, "Val0"], [1, "Val0"], [2, "Val0"], [3, "Val0"]);
    //     console.log(table.toString())
  });
};

module.exports = { viewDepartment };

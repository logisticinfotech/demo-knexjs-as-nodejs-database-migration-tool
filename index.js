const express = require("express");
const mysql = require("mysql");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "knexdb",
});

//connect to database
connection.connect(err => {
  if (err) throw err;
  console.log("Db Connected...");
});

app.listen(8000, () => {
  console.log("Server is running at port 8000");
});

app.get("/", (req, res) => {
  let sql = "SELECT * FROM City";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send({
      results: results,
    });
  });
});

app.get("/create", (req, res) => {
  let sql = "INSERT INTO City(cityName) value('Rajkot')";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send({
      message: "Insert successfully",
    });
  });
});

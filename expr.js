const express = require("express");
const app = express();
const connection = require('./sql-db')

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/alok", (req, res) => {
  res.send("Hello Alok!");
});

app.get("/Rajat", (req, res) => {
  res.send("Hello Rajat!");
});

app.get("/sqldata", (req, res) => {
  const query = "SELECT * FROM student";
  // const query = "insert into student values (7,'Alok')";

  connection.query(query, (err, results) => {
    if (err) {
      console.error("❌ Query error:", err);
      res.status(500).json({ error: "Database query failed" });
      return;
    }
    res.json(results);
  });
});

const port=3000
app.listen(port, () => {
  console.log("Server is running on port 3000");
});
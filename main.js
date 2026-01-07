const express = require("express");
const dbConnection = require("./dababase/dbConnection");
const app = express();
const port = 3000;
require('dotenv').config()



app.get("/", (req, res) => {
  res.send("Hello World!");
});
dbConnection()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const dbConnection = require("./dababase/dbConnection");
const  route = require("./route");
const app = express();
const port = 3000;
require('dotenv').config()



app.get("/", (req, res) => {
  res.send("Hello World!");
});
dbConnection()
app.use(route)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

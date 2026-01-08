const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
  res.send({
    name: "Itmam",
    email: "itmam@gmail.com",
    password: "2345",
  });
});

module.exports = router;

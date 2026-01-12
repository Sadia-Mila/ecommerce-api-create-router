const express = require("express");
const userSchema = require("../model/userSchema");
const emailValidation = require("../helpers/emailValidation");
const router = express.Router();

function signupController(req, res) {
  const { firstName, lastName, email, password} = req.body;
  if (!firstName || !lastName) {
    return res.json({
      message: "Error: firstName and lastName is required",
    });
  }
  if (!email) {
    return res.json({
      message: "Error: email is required",
    });
  }
  if (!emailValidation(email)) {
    return res.json({
      message: "Error: Email format is not valid",
    });
  }
  const user = new userSchema({
    firstName,
    lastName,
    email,
    password,
  });
  user.save();
  res.json({
    data: user
  })
}

module.exports = signupController;



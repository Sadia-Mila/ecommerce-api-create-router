const express = require("express");
const router = express.Router();
const userSchema = require("../model/userSchema");
const emailValidation = require("../helpers/emailValidation");
const bcrypt = require("bcrypt");

async function signupController(req, res) {
  const { firstName, lastName, email, password } = req.body;
  // console.log("request body", req.body);

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
  if (!password) {
    return res.json({
      message: "Error: password required",
    });
  }
  if (!emailValidation(email)) {
    return res.json({
      message: "Error: Email format is not valid",
    });
  }

  const duplicateEmail = await userSchema.find({email});
  console.log(duplicateEmail);

  if (duplicateEmail.length > 0) {
    return res.json({
      message: "Duplicate Email",
    });
  }

  bcrypt.hash(password, 10, function (err, hash) {
    const user = new userSchema({
      firstName,
      lastName,
      email,
      password: hash,
    });
    user.save();
    res.json({
      message: "Data Send with hash password",
    });
  });
}

module.exports = signupController;

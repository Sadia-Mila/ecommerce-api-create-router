const emailValidation = require("../helpers/emailValidation");
const userSchema = require("../model/userSchema");
const bcrypt = require("bcrypt");

async function loginController(req, res) {
  const { email, password } = req.body;
  if (!email) {
    return res.json({ error: "Email is required" });
  }
  if (!password) {
    return res.json({ error: "Password is required" });
  }
  if (!emailValidation(email)) {
    return res.json({ error: "Email format is not valid" });
  }

  const user = await userSchema.findOne({ email });
  if (!user) {
    return res.json({
      error: "Email not found in DB",
    });
  } 
  const isPasswordMatched = await bcrypt.compare(password, user.password);
  if (!isPasswordMatched) {
    return res.json({
      message: "Invalid Password",
    });
  } else{
      res.end("You have successfully Completed you Login");

  }
}
module.exports = loginController;

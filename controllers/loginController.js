const emailValidation = require("../helpers/emailValidation");
const userSchema = require("../model/userSchema");

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

  const dublicateUser = await userSchema.findOne({email})
  if(!dublicateUser.email){
    return res.json({
        error: "Email not found in DB"
    })
    
  }
  if(!dublicateUser.password){
    return res.json({
        error: "password not found in DB"
    })
    
  }
  res.end("login Completed")
}
module.exports = loginController;

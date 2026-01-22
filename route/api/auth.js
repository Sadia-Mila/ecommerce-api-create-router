const express = require("express");
const signupController = require("../../controllers/signupController");
const {otpController, resendOtpController} = require("../../controllers/otpController");
const loginController = require("../../controllers/loginController");
const router = express.Router();

router.post("/signup", signupController);
router.post("/otpVerify", otpController);
router.post("/resendotp", resendOtpController);
router.post("/login", loginController);

module.exports = router;

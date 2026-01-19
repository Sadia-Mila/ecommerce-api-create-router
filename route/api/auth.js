const express = require("express");
const signupController = require("../../controllers/signupController");
const otpController = require("../../controllers/otpController");
const router = express.Router();

router.post("/signup", signupController);
router.post("/otpVerify", otpController);

module.exports = router;

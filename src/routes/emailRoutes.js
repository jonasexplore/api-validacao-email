const router = require("express").Router();
const emailController = require("../controllers/emailController");

router.post("/", emailController.sendEmail);

module.exports = router;

/**
 * Variável responsável por importar as rotas.
 */
const router = require("express").Router();
/**
 * Variável responsável por importar a controller de emails.
 */
const emailController = require("../controllers/emailController");

router.post("/", emailController.sendEmail);

module.exports = router;

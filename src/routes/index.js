/**
 * Variável responsável por criar as rotas.
 */
const router = require("express").Router();
/**
 * Variável responsável por implementar as rotas relacionadas ao e-mail.
 */
const emailRouter = require("./emailRoutes");

router.use("/api/email", emailRouter);

router.get("*", (req, res) => {
  res.status(404).json("Ops, router not found!");
});

module.exports = router;

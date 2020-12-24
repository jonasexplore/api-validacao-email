const router = require("express").Router();
const emailRouter = require("./emailRoutes");

router.use("/api/email", emailRouter);

router.get("*", (req, res) => {
  res.status(404).json("Ops, router not found!");
});

module.exports = router;

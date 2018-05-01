const router = require("express").Router();
const adultRoutes = require("./adult.js");

// Routes
router.use("/adult", adulttRoutes);

module.exports = router;

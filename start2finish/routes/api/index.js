const router = require("express").Router();
const parentRoutes = require("./parent.js");

// Routes
router.use("/parent", parentRoutes);

module.exports = router;

const router = require("express").Router();
const parentRoutes = require("./parent.js");

// Book routes
router.use("/parent", parentRoutes);

module.exports = router;

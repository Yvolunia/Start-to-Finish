const router = require("express").Router();
const profileRoutes = require("./profile.js");
const missionsRoutes = require("./missions.js");

// Routes
router.use("/profile", profileRoutes);
router.use("/missions", missionsRoutes);

module.exports = router;

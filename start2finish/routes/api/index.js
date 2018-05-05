const router = require("express").Router();
const userRoutes = require("./user.js");
const profileRoutes = require('./profile');
const missionRoutes = require('./missions');

// Routes
router.use("/user", userRoutes);
router.use('/profile', profileRoutes);
router.use('/missions', missionRoutes);

module.exports = router;

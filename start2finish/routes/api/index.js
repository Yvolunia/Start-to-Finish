const router = require("express").Router();
const bookRoutes = require("./Books");

// Book routes
router.use("/parent", bookRoutes);

module.exports = router;

const router = require("express").Router();
const parentController = require("../../controllers/parentController");

// Matches with "/api/parent"
router.route("/")
  .get(parentController.findAll)
  .post(parentController.create);

// Matches with "/api/parent/:id"
router
  .route("/:id")
  .get(parentController.findById)
  .put(parentController.update)
  .delete(parentController.remove);

module.exports = router;

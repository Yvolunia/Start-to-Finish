const router = require("express").Router();
const booksController = require("../../controllers/parentController");

// Matches with "/api/books"
router.route("/")
  .get(parentController.findAll)
  .post(parentController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(parentController.findById)
  .put(parentController.update)
  .delete(parentController.remove);

module.exports = router;
const router = require("express").Router();
const adultController = require("../../controllers/adultController");

router.route("/")
  .get(kidsController.findAll)
  .post(kidsController.create);

router
  .route("/:id")
  .get(kidsController.findById)
  .put(kidsController.update)
  .delete(kidsController.remove);

module.exports = router;

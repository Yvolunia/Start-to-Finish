const router = require("express").Router();
const adultController = require("../../controllers/adultController");

router.route("/")
  .get(missionsController.findAll)
  .post(missionsController.create);

router
  .route("/:id")
  .get(missionsController.findById)
  .put(missionsController.update)
  .delete(missionsController.remove);

module.exports = router;
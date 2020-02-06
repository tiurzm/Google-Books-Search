const router = require("express").Router();
const googleApiController = require("../../controllers/googleApiController");

router.route("/")
  .get(googleApiController.findAll);

module.exports = router;

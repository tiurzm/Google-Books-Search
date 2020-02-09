const router = require("express").Router();
const bookRoutes = require("./books");
const googleApiRoutes = require("./googleApi")

// Book routes
router.use("/books", bookRoutes);
router.use("/googleApi", googleApiRoutes);

module.exports = router;

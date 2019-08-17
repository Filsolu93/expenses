const router = require("express").Router();
const bookRoutes = require("./books");
const exampleRoutes = require("./example");

// Book routes
router.use("/books", bookRoutes);
router.use("/example", exampleRoutes);

module.exports = router;
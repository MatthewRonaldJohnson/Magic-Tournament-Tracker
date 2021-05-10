const router = require("express").Router();
const userRoutes = require("./user");
const inputRoutes = require('./input')

// Post routes
router.use("/user", userRoutes);
router.use("/input", inputRoutes)

module.exports = router;

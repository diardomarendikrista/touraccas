const router = require("express").Router();
const Controller = require("../controllers/controller");
const tour = require("./tour");
const tourist = require("./tourist");

router.get("/", Controller.home);

router.use("/tours", tour);
router.use("/tourists", tourist);

module.exports = router;

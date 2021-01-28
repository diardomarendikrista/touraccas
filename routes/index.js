const router = require("express").Router();
const Controller = require("../controllers/controller");
const tour = require("./tour");
const tourist = require("./tourist");

const mid = ((req, res, next) => {
  if (req.session.userId) {
    next()
  } else {
    res.redirect("/login")
  }
})

router.get("/", Controller.home);
router.get("/login", Controller.loginForm);
router.post("/login", Controller.login);
router.get("/register", Controller.registerForm);
router.post("/register", Controller.register);
router.get("/logout", Controller.logout);

router.use(mid);
router.use("/tours", tour);
router.use("/tourists", tourist);

module.exports = router;

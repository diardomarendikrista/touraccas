const router = require("express").Router();
const CtrlTourist = require("../controllers/ctrl-tourist");


router.get("/", CtrlTourist.list);
router.get("/add", CtrlTourist.addForm);
router.post("/add", CtrlTourist.add);
router.get("/:id/edit", CtrlTourist.editForm);
router.post("/:id/edit", CtrlTourist.edit);
router.get("/:id/delete", CtrlTourist.delete);

module.exports = router;

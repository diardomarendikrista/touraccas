const router = require("express").Router();
const CtrlTour = require("../controllers/ctrl-tour");


router.get("/", CtrlTour.list);
router.get("/add", CtrlTour.addForm);
router.post("/add", CtrlTour.add);
router.get("/:id/edit", CtrlTour.editForm);
router.post("/:id/edit", CtrlTour.edit);
router.get("/:id/delete", CtrlTour.delete);
router.get("/:id/addTourist", CtrlTour.addTouristForm);
router.post("/:id/addTourist", CtrlTour.addTourist);
router.get("/:id/addTourist/:idTourist/delete", CtrlTour.deleteTourist);

module.exports = router;

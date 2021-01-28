const { Tourist } = require('../models/index');

class CtrlTourist {
  static list(req, res) {
    Tourist.findAll()
      .then(data => {
        res.render("showTourist", { title: "Tour Accas - List", data });
      })
      .catch(err => res.send(err));
  }

  static addForm(req, res) {
    res.render("addTourist", { title: "Tour Accas - Add" });
  }

  static add(req, res) {
    const newTourist = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      age: req.body.age,
      phone: req.body.phone
    }
    Tourist.create(newTourist)
      .then(data => {
        res.redirect("/Tourists");
      })
      .catch(err => res.send(err));
  }

  static editForm(req, res) {
    const { id } = req.params;
    Tourist.findOne({ where: { id } })
      .then(data => {
        res.render('editTourist', { title: 'Edit Tourist', data })
      })
      .catch(err => res.send(err));
  }

  static edit(req, res) {
    const { id } = req.params;

    Tourist.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: req.body.age,
        phone: req.body.phone
      },
      { where: { id } }
    )
      .then(data => {
        res.redirect("/Tourists")
      })
      .catch(err => res.send(err));
  }

  static delete(req, res) {
    const { id } = req.params;

    Tourist.destroy({ where: { id } })
    .then(data => {
      res.redirect("/Tourists")
    })
    .catch(err => res.send(err));
  }

}

module.exports = CtrlTourist;
const { Tour, Tourist, TourTourist } = require("../models/index");
const { Op } = require("sequelize");

class CtrlTour {
  static list(req, res) {
    Tour.findAll({
      order: [['name', 'ASC']],
      include: Tourist
    })
      .then(data => {
        res.render("showTour", { title: "Tour Accas - List", data });
      })
      .catch(err => res.send(err));
  }

  static addForm(req, res) {
    res.render("addTour", { title: "Tour Accas - Add" });
  }

  static add(req, res) {
    const newTour = {
      name: req.body.name,
      destination: req.body.destination,
      latitude: req.body.latitude,
      longitude: req.body.longitude
    }
    Tour.create(newTour)
      .then(data => {
        res.redirect("/tours");
      })
      .catch(err => res.send(err));
  }

  static editForm(req, res) {
    const { id } = req.params;
    Tour.findOne({ where: { id } })
      .then(data => {
        res.render("editTour", { title: "Tour Accas - Edit Tour", data })
      })
      .catch(err => res.send(err));
  }

  static edit(req, res) {
    const { id } = req.params;

    Tour.update(
      {
        name: req.body.name,
        destination: req.body.destination,
        latitude: req.body.latitude,
        longitude: req.body.longitude
      },
      { where: { id } }
    )
      .then(data => {
        res.redirect("/tours")
      })
      .catch(err => res.send(err));
  }

  static delete(req, res) {
    const { id } = req.params;

    Tour.destroy({ where: { id } })
      .then(data => {
        res.redirect("/tours")
      })
      .catch(err => res.send(err));
  }

  static addTouristForm(req, res) {
    const { id } = req.params;
    let dataTour;

    Tour.findOne({ where: { id }, include: Tourist })
      .then(data => {
        dataTour = data;
        return Tourist.findAll()
      })
      .then(dataTourist => {
        //res.send(dataTour);
        res.render("addTourTourist", { title: "Tour Accas - add tour tourist", dataTour, dataTourist })
      })
      .catch(err => res.send(err));
  }

  static addTourist(req, res) {
    const { id } = req.params;
    const newTourTourist = {
      tour_id: id,
      tourist_id: req.body.tourist_id
    }

    TourTourist.create(newTourTourist)
      .then(data => {
        res.redirect(`/tours/${id}/addTourist`)
      })
      .catch(err => res.send(err));
  }

  static deleteTourist(req, res) {
    const { idTourist } = req.params; // id tourist
    const { id } = req.params; // id tour

    TourTourist.destroy({
      where: {
        [Op.and]: [{ tour_id: id }, { tourist_id: idTourist }]
      }
    })
      .then(data => {
        res.redirect(`/tours/${id}/addTourist`)
      })
      .catch(err => res.send(err))
  }

}

module.exports = CtrlTour;
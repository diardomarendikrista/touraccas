

class Controller {
  static home(req, res) {
    res.render("home.ejs", { title: "Tour Accas - Home"})
  }
}

module.exports = Controller
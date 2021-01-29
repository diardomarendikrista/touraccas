const { Account } = require('../models/index');
const { compare } = require('../helpers/bcrypt');

class Controller {
  static home(req, res) {
    res.render("home", { title: "Tour Accas - Home"})
  }

  static registerForm(req, res) {
    const errValidate = req.query.errValidate;
    res.render("register", { title: "Tour Accas - Register", errValidate})
  }

  static register(req, res) {
    const newUser = {
      user: req.body.user,
      password: req.body.password,
      email: req.body.email
    }
    Account.create(newUser)
      .then(data => {
        res.redirect('/login');
      })
      .catch(err => {
        if (err.errors.length <= 0) res.send(err);
        else {
          let errMessage = [];
          err.errors.forEach(element => {
            errMessage.push(element.message)
          });
          res.redirect(`/register?errValidate=${errMessage}`);
        }
      });
  }

  static loginForm(req, res) {
    const errValidate = req.query.errValidate;
    res.render('login', { title: 'login' , errValidate})
  }
  static login(req, res) {
    let errMessage = `user/password salah`
    if (!req.body.user) {
      res.redirect(`/login?errValidate=${errMessage}`)
    }

    Account.findOne({where: {user: req.body.user}})
      .then(user => {
        let hasilPassword = compare(req.body.password, user.password);
        if (user && hasilPassword) { 
          req.session.userId = user.id;
          res.redirect("/")
        } else {
          res.redirect(`/login?errValidate=${errMessage}`)
        }
      })
      .catch(err => {
          res.redirect(`/login?errValidate=${errMessage}`);
      });
  }
  static logout(req, res) {
    req.session.destroy(err => {
      res.redirect("/login");
    })
  }
}

module.exports = Controller
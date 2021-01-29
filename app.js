const session = require('express-session');
const express = require("express");
const router = require("./routes/index");
const app = express();
const PORT = process.env.PORT || 3000;
// const port = 3000;

const formatPeople = require('./helpers/formatPeople');
app.locals.formatPeople = formatPeople;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use("/", router)

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
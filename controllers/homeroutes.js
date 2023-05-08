const router = require("express").Router();
// const withAuth = require("../utils/auth");
const { User } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage", {
    logged_in: req.session.logged_in,
  });
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
  } else {
    res.render("login", {
      logged_in: req.session.logged_in,
    });
  }
});

module.exports = router;
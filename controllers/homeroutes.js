const router = require("express").Router();
// const withAuth = require("../utils/auth");
const { User, Post } = require("../models");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [User]
    })
    const postData = posts.map((post)=> post.get({plain: true}));
    res.render("homepage", {  
      postData,
      logged_in: req.session.logged_in,
    });
  } catch(err){
    console.log(err);
  }
});

router.get("/dashboard", async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [User]
    })
    const postData = posts.map((post)=> post.get({plain: true}));
    res.render("dashboard", {  
      postData,
      logged_in: req.session.logged_in,
    });
  } catch(err){
    console.log(err);
  }
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

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
  } else {
    res.render("signup", {
      logged_in: req.session.logged_in,
    });
  }
});

module.exports = router;
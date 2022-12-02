const express = require("express");
const router = express.Router();

//------Welcome routes-------
router.get("/", (req, res) => {
  res.render("welcome");
});

//--------Dashboard Routes---------

router.get("/dashboard", (req, res) =>
  res.render("dash", {
    name: req.user.name,
  })
);

module.exports = router;

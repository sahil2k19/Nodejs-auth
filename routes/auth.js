const express = require("express");

const router = express.Router();

const authController = require("../controllers/authController");

// login Routes
router.get("/login", (req, res) => res.render("login"));
// Forgot password Route
router.get("/forgot", (req, res) => res.render("forgot"));

// Reset Password Route
router.get("/reset/:id", (req, res) => {
  res.render("reset", { id: req.params.id });
});

// Register Route
router.get("/register", (req, res) => res.render("register"));

// Register POst Handle
router.post("/register", authController.registerHandle);

//------------ Email ACTIVATE Handle ------------//
router.get("/activate/:token", authController.activateHandle);

//------------ Forgot Password Handle ------------//
router.post("/forgot", authController.forgotPassword);

//------------ Reset Password Handle ------------//
router.post("/reset/:id", authController.resetPassword);

//------------ Reset Password Handle ------------//
router.get("/forgot/:token", authController.gotoReset);

//------------ Login POST Handle ------------//
router.post("/login", authController.loginHandle);

//------------ Logout GET Handle ------------//
router.get("/logout", authController.logoutHandle);

module.exports = router;

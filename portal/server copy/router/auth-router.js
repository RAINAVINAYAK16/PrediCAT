// router/auth-router.js
const express = require("express");
const router = express.Router();
const authControllers = require("../Controllers/auth-controller");

router.route("/").get(authControllers.home);
router.route("/login").post(authControllers.login);
router.route("/register").post(authControllers.register);

module.exports = router;

const express = require("express");
const auth = require("../middlewares/auth.middleware");
const {
  registerController,
  loginController,
  profileController,
  logoutController,
} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

router.get("/profile", auth, profileController);

router.get("/logout", logoutController);

module.exports = router;

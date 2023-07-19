const express = require("express");
const {
  login,
  signup,
  logout,
  authVerify,
} = require("../Controllers/authController");
const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);

module.exports = router;

const express = require("express");
const { searchUser } = require("../Controllers/searchUser");
const { authVerify } = require("../Controllers/authController");
const router = express.Router();

router.get("/searchUser", authVerify, searchUser);

module.exports.userRouter = router;

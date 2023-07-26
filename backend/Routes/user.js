const express = require("express");
const { searchUser, getSuggestedUser } = require("../Controllers/searchUser");
const { authVerify } = require("../Controllers/authController");
const router = express.Router();

router.get("/searchUser", authVerify, searchUser);
router.get("/getSuggestedUsers", authVerify, getSuggestedUser);

module.exports.userRouter = router;

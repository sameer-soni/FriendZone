const express = require("express");
const { authVerify } = require("../Controllers/authController");
const {
  send_request,
  fetch_requests,
} = require("../Controllers/friendsController");
const router = express.Router();

router.post("/sendFriendRequest", authVerify, send_request);
router.post("/fetchFriendRequest", authVerify, fetch_requests);

module.exports.friendRouter = router;

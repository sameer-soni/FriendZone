const express = require("express");
const { authVerify } = require("../Controllers/authController");
const {
  send_request,
  fetch_requests,
  respond_to_request,
  fetch_friends,
} = require("../Controllers/friendsController");
const router = express.Router();

router.post("/sendFriendRequest", authVerify, send_request);
router.post("/respond_FriendRequest", authVerify, respond_to_request);
router.get("/fetchFriendRequest", authVerify, fetch_requests);
router.get("/fetchFriends", authVerify, fetch_friends);

module.exports.friendRouter = router;

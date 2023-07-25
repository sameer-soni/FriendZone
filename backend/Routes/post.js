const express = require("express");
const { authVerify } = require("../Controllers/authController");
const { createPost, fetchPosts } = require("../Controllers/postController");
const router = express.Router();

router.post("/create-post", authVerify, createPost);
router.post("/fetch-post", authVerify, fetchPosts);

module.exports.postRouter = router;

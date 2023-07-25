const Post = require("../Models/postSchema");

const createPost = async (req, res) => {
  const { img, caption } = req.body;
  const loggedUser = req.user;

  if (!img && !caption) {
    return res.status(400).json({ error: "nothing provided for the post" });
  }

  try {
    const newPost = new Post({
      owner: loggedUser._id,
      content: {
        caption,
        pic: img,
      },
    });

    await newPost.save();
    return res.status(200).json({ message: newPost });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const fetchPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("owner", "-password");
    return res.json({ posts });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createPost, fetchPosts };

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
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate("owner", "-password");

    return res.json({ posts });
  } catch (error) {
    console.log(error);
  }
};

const addComment = async (req, res) => {
  const { comment, post } = req.body;
  const loggedUser = req.user;

  if (!comment) {
    return res.status(400).json({ error: "nothing to comment" });
  }

  try {
    const thisPost = await Post.findById(post._id);

    thisPost.comments.push({
      text: comment,
      postedBy: {
        _id: loggedUser._id,
        username: loggedUser.username,
        pic: loggedUser.pic,
      },
    });

    await thisPost.save();

    return res.json({ message: "comment added", thisPost });
  } catch (error) {
    return res.status(400).json({ error, msg: "this is error" });
  }
};

module.exports = { createPost, fetchPosts, addComment };

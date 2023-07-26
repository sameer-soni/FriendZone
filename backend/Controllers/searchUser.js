const User = require("../Models/userSchema");

const searchUser = async (req, res) => {
  const { searchInput } = req.query;

  if (!searchInput) {
    return res.status(400).json({ error: "No search Value" });
  }

  const loggedUser = req.user;

  const searchedUser = await User.find({
    $or: [
      { username: { $regex: searchInput, $options: "i" } },
      { email: { $regex: searchInput, $options: "i" } },
    ],
    email: { $ne: loggedUser.email },
  }).select("-password");

  return res.status(200).json({ users: searchedUser });
};

const getSuggestedUser = async (req, res) => {
  const loggedUser = req.user;
  try {
    const users = await User.find();

    const getSuggestedUsers = users.filter(
      (e) => !e._id.equals(loggedUser._id)
    );

    return res.status(200).json({ getSuggestedUsers });
  } catch (error) {
    return res.status(400).json({ error: "failed to get suggested users" });
  }
};

module.exports = { searchUser, getSuggestedUser };

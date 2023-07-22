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

module.exports = { searchUser };

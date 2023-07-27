const Notification = require("../Models/notificationSchema");
const User = require("../Models/userSchema");
const { getIO } = require("../socketio");

const send_request = async (req, res) => {
  try {
    const { recieverId } = req.body;
    const sender = req.user;

    if (!recieverId) {
      return res
        .status(400)
        .json({ error: "No user selected to send request to" });
    }

    const reciever = await User.findById(recieverId);

    if (!reciever) {
      return res.status(400).json({ error: "Reciever not found" });
    }

    const friendStatus = reciever.friends?.find((e) =>
      e.user.equals(sender._id)
    );

    if (friendStatus?.status === "accepted") {
      return res.status(400).json({ error: "Already friends" });
    }

    if (friendStatus?.status === "pending") {
      return res.status(400).json({ error: "Friend request already sent" });
    }

    reciever.friends.push({
      user: sender._id,
      name: sender.username,
      email: sender.email,
      pic: sender.pic,
    });
    await reciever.save();

    //socket io
    const io = getIO();
    io.emit("new friend request");

    //notification
    const newNotification = new Notification({
      reciever: recieverId,
      sender: sender._id,
      notification: `${sender.username} has sent friend request`,
    });
    await newNotification.save();

    return res.json({ message: "Friend request sent successfully" });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const respond_to_request = async (req, res) => {
  const { status, requested_user_Id } = req.body;
  const loggedUser = req.user;

  const requestedUser = await loggedUser.friends.find((e) =>
    e.user.equals(requested_user_Id)
  );

  if (status == "accept") {
    requestedUser.status = "accepted";

    const reciever = await User.findById(requested_user_Id);
    reciever.friends.push({
      user: loggedUser._id,
      name: loggedUser.username,
      email: loggedUser.email,
      pic: loggedUser.pic,
      status: "accepted",
    });

    await reciever.save();

    //notification
    const newNotification = new Notification({
      reciever: requested_user_Id,
      sender: loggedUser,
      notification: `${loggedUser.username} has accepted your friend request`,
    });
    await newNotification.save();
  } else if (status === "decline") {
    requestedUser.status = "rejected";

    loggedUser.friends = loggedUser.friends.filter(
      (e) => !e.user.equals(requested_user_Id)
    );
  }
  await loggedUser.save();
  return res.status(200).json({ requestedUser });
};

const fetch_requests = async (req, res) => {
  const loggedUser = req.user;

  try {
    const friendRequests = loggedUser.friends.filter((e) => {
      return e.status === "pending";
    });

    if (friendRequests.length === 0) {
      return res.json({ message: "no friend request" });
    }

    res.json({ friendRequests });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const fetch_friends = async (req, res) => {
  const loggedUser = req.user;

  try {
    const friends = loggedUser.friends.filter((e) => {
      return e.status === "accepted";
    });

    if (friends.length === 0) {
      return res.json({ message: "no friend " });
    }

    res.json({ friends });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const remove_friend = async (req, res) => {
  const { friend_id } = req.body;
  const loggedUser = req.user;

  if (!friend_id) {
    return res.status(400).json({ error: "No friend selected to remove" });
  }

  try {
    //removing from logged user
    loggedUser.friends = loggedUser.friends.filter(
      (e) => !e.user.equals(friend_id)
    );

    //removing from the another user
    const friendUser = await User.findById(friend_id);
    friendUser.friends = friendUser.friends.filter(
      (e) => !e.user.equals(loggedUser._id)
    );

    await loggedUser.save();
    await friendUser.save();

    const io = getIO();
    io.emit("friend list updated");
  } catch (error) {
    return res.status(400).json({ error });
  }
  return res.status(200).json({ loggedUser });
};

module.exports = {
  send_request,
  respond_to_request,
  fetch_requests,
  fetch_friends,
  remove_friend,
};

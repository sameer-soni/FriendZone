const Notification = require("../Models/notificationSchema");

const fetchNotification = async (req, res) => {
  const loggedUser = req.user;

  try {
    const noti = await Notification.find({ reciever: loggedUser._id }).populate(
      "sender",
      "-password -friends"
    );
    return res.status(200).json({ noti });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

module.exports = fetchNotification;

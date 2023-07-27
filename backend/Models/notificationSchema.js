const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    reciever: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    notification: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);

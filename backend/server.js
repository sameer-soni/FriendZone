const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

// Routers
const authRouter = require("./Routes/auth");
const { userRouter } = require("./Routes/user");
const { friendRouter } = require("./Routes/friend");

//middelwares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

//db
const mongoose = require("mongoose");
const db =
  "mongodb+srv://Sameer:2FvImrCAExwvj6KF@cluster0.ov2ktdn.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to database");

    const server = app.listen(PORT, () => {
      console.log("server has started on ", PORT);
    });

    const { initializeSocketIO } = require("./socketio.js");
    initializeSocketIO(server);
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/friend", friendRouter);
// app.post("/test", authVerify, (req, res) => {
//   console.log("in test");
//   const user = req.user;
//   console.log(user);
// });

const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Routers
const authRouter = require("./Routes/auth");

//middelwares
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

//db
const mongoose = require("mongoose");
const { authVerify } = require("./Controllers/authController");
const db =
  "mongodb+srv://Sameer:2FvImrCAExwvj6KF@cluster0.ov2ktdn.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to database");

    app.listen(PORT, () => {
      console.log("server has started on ", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/auth", authRouter);
app.post("/test", authVerify, (req, res) => {
  console.log("in test");
  const user = req.user;
  console.log(user);
});

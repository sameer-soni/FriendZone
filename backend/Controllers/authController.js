const jwt = require("jsonwebtoken");
const secretKey = "this is the secret key for now";
const User = require("../Models/userSchema");

const signup = async (req, res) => {
  const { username, email, password, pic } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: "empty field!!" });
  }

  try {
    //checking user existence with that email
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res
        .status(400)
        .json({ error: "user already exist with this email" });
    }

    if (!pic) {
      const newUser = new User({
        username,
        email,
        password,
      });
      console.log("no pic block");
      await newUser.save();
      return res.status(200).json({ message: "user created", user: newUser });
    }

    if (pic) {
      console.log("pic block");
      const newUser = new User({
        username,
        email,
        password,
        pic,
      });
      await newUser.save();
      return res.status(200).json({ message: "user created", user: newUser });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "field cannot be empty" });
  }
  try {
    //finding if user exists or not..
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "email/password is invalid" }); //email doesn't exist
    }

    if (password != user.password) {
      return res.status(400).json({ error: "email/password is invalid" });
    }

    const token = jwt.sign({ userId: user._id }, secretKey);
    res.cookie("token", token, { httpOnly: true, secure:true, sameSite: 'None' });

    return res
      .status(200)
      .json({ message: "successfully logged in", user: user });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const authVerify = async (req, res, next) => {
  console.log("in authVerify");
  try {
    const token = req.cookies.token;
    // console.log(token);
    if (!token) {
      return res.status(400).json({ error: "no token" });
    }
    try {
      const verify = jwt.verify(token, secretKey);
      console.log(verify);
      if (!verify) {
        return res.status(400).json({ error: "invalid token!" });
      }

      const user = await User.findOne({ _id: verify.userId }).select(
        "-password"
      );
      if (!user) {
        return res.status(400).json({ error: "user not found" });
      }
      // console.log(user);
      req.user = user;
      // res.status(200).json({ user: user });
    } catch (error) {
      return res.status(400).json({ error });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
  next();
};

const logout = async (req, res) => {
  res.clearCookie("token", { httpOnly: true });
  res.status(200).json({ message: "Logout Successful" });
};

module.exports = { signup, login, authVerify, logout };

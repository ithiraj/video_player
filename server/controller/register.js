//import dependecies
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

import User from "../models/user.js";

const register = async (req, res, next) => {
  const { email, password } = req.body;

  //validate
  if (!email) {
    return res.status(400).json({ message: "please provide email" });
  }
  if (!password) {
    return res.status(400).json({ message: "please provide password" });
  }
  if (password.length < 6)
    return res.status(400).json({
      message: "The password needs to be at least 5 characters long.",
    });

  try {
    //find exisiting user
    const user = await User.findOne({ email: email });

    if (user) {
      return res.status(409).json({ message: "email already exists" });
    }

    //password hashing
    const salt = 10;
    const hash = await bcrypt.hash(password, salt);

    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      email,
      password: hash,
    });
    await newUser.save();
    return res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

export default register;

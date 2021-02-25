//import dependencies
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import User from "../models/user.js";
import bcrypt from "bcryptjs";
import createToken from "../auth/jwtAuth.js";

dotenv.config();

export const login = async (req, res) => {
  const { email, password } = req.body;

  //validate
  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "please provide email" });
  }

  if (!password) {
    return res.status(400).json({ message: "please provide password" });
  }

  if (password.length < 6)
    return res.status(400).json({
      message: "The password needs to be at least 5 characters long.",
    });

  try {
    const user = await User.find({ email: email });

    if (user.length < 1) {
      return res.status(401).json({ message: "email does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user[0].password);

    if (!isMatch) {
      return res.status(401).json({ message: "invalid password" });
    }
    const token = createToken(user[0]);

    res.cookie("token", token, { httpOnly: true });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

export const logout = async (req, res) => {
  await res.cookie("token", "", { httpOnly: true }).send("logout successfully");
};

export const loggedIn = async (req, res) => {
  // try {
  //   const token = await req.cookie.token;
  //   console.log(token);

  //   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  //   res.json(true);
  // } catch (err) {

  // }
  try {
    const cookie = req.headers.cookies;
    console.log(cookie);
    // const token = cookie.slice(6);
    // console.log(token);
    // if (!token) {
    //   return res.json(false);
    // }

    // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // res.json(true);
    // console.log("auth is true");
    next();
  } catch (err) {
    console.error(err);
    res.json(false);
  }
};

export const prot = (req, res) => {
  res.send("I am protected routes");
};

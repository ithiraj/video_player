//import dependecies
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import Video from "../models/video.js";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

const allVideo = async (req, res, next) => {
  const cookie = req.headers.cookie;
  const token = cookie.slice(6);
  const decoded = jwt.decode(token);
  try {
    await User.findById({ _id: decoded._id })
      .populate("video")
      .exec((err, document) => {
        if (err)
          res.status(500).json({
            message: { message: "Error has occured" },
          });
        else {
          res.status(200).json({ video: document.video });
        }
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

export default allVideo;

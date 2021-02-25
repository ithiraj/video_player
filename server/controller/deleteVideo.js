//import dependecies
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import Video from "../models/video.js";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

const deleteVideo = async (req, res, next) => {
  const token = req.cookies.token;
  const decoded = jwt.decode(token);
  try {
    const video = await Video.findByIdAndRemove(req.params.id);
    if (!video)
      return res.status(404).json("The list with the given ID was not found.");

    res.send(video);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

export default deleteVideo;

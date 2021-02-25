//import dependecies
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import Video from "../models/video.js";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

const addVideo = async (req, res, next) => {
  //   console.log(req.body);
  const token = req.cookies.token;
  const decoded = jwt.decode(token);
  console.log(decoded);

  console.log(decoded.email, decoded._id);
  try {
    const { videoName, videoUrl } = req.body;
    const user = await User.findOne({ _id: decoded._id });
    if (!user) {
      res.status(401).json({ message: "invalid login" });
    } else {
      const video = new Video({
        videoName,
        videoUrl,
      });
      video.save(async (error) => {
        if (error) {
          res.status(500).json({
            message: "Error has occured",
          });
        } else {
          await user.video.push(video);
          user.save((err) => {
            if (err)
              res.status(500).json({
                message: "Error has occured",
              });
            else {
              res.status(200).json({
                video,
              });
            }
          });

          // }
          // );
        }
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};
export default addVideo;

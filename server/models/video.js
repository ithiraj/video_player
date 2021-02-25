//import dependecies
import mongoose from "mongoose";

const videoSchema = mongoose.Schema({
  videoName: {
    type: String,
    required: true,
  },

  videoUrl: {
    type: String,
    required: true,
  },
});

const Video = mongoose.model("Video", videoSchema);

export default Video;

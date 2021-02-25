//import dependencies
import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "please provide a email"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    max: 200,
  },

  password: {
    type: String,
    required: [true, "please provide a password"],
    min: 6,
    max: 200,
  },

  video: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

const User = mongoose.model("User", UserSchema);

export default User;

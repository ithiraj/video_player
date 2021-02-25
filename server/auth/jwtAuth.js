import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const createToken = ({ email, _id }) => {
  //sign the token
  return jwt.sign(
    {
      _id,
      email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

export default createToken;

import jwt from "jsonwebtoken";

import dotenv from "dotenv";

dotenv.config();

const Auth = async (req, res, next) => {
  try {
    const cookie = req.headers.cookie;
    const token = cookie.slice(6);
    if (!token) return res.status(401).json({ errorMessage: "Unauthorized" });

    const verified = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = verified.user;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default Auth;

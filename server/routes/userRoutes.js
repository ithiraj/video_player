import express from "express";
import addVideo from "../controller/addVideo.js";
import register from "../controller/register.js";
import { login, prot, loggedIn, logout } from "../controller/login.js";
import Auth from "../middleware/auth.js";
import allVideo from "../controller/allVideo.js";
import deleteVideo from "../controller/deleteVideo.js";
// import { add } from "../controller/add.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/home", Auth, allVideo);

router.post("/addvideo", Auth, addVideo);

router.delete("/home/:id", Auth, deleteVideo);

router.post("/logout", logout);

export default router;

import "./HomeScreen.css";
import Navbar from "../components/Navbar.js";
import SideBar from "../components/sideBar.js";
import VideoPlayer from "../components/videoPlayer.js";
import "../components/Navbar.css";
import React, { useState, useContext } from "react";
import Popup from "../components/popup";
import BackDrop from "../components/Backdrop";
import { UserContext } from "../auth/config/AuthContext";

const HomeScreen = () => {
  const { pop, setPop } = useContext(UserContext);
  return (
    <>
      <div className="home_screen">
        <Popup show={pop} click={() => setPop(false)} />

        <BackDrop show={pop} click={() => setPop(false)} />

        <div className="main_screen">
          <div className="video_link">
            <SideBar click={() => setPop(true)} />
          </div>
          <div className="player">
            <VideoPlayer />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;

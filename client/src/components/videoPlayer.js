import "./videoPlayer.css";
import React, { useContext } from "react";
import { VideoContext } from "../app";
import { UserContext } from "../auth/config/AuthContext";
const VideoPlayer = () => {
  const { passVideo } = useContext(UserContext);
  return (
    <>
      <div>
        <div className="video_frame">
          <iframe
            className="video_player"
            width="854"
            height="502"
            // src="https://www.youtube.com/embed/7nH2NYpeKa4"
            src={passVideo.videoUrl}
            src={`${passVideo.videoUrl}?autoplay=1`}
            // autoplay="0"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;

import "./sideBar.css";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../auth/config/AuthContext";

const SideBar = ({ show, click }) => {
  const { setPassVideo, video, setvideo, vi, setvi } = useContext(UserContext);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users/home", { withCredentials: true })
      .then((response) => response)
      .then((res) => {
        setvideo(res.data.video);
      })
      .catch((err) => console.log(err));
  }, [vi]);

  const clickEvent = (value) => {
    setPassVideo(value);
  };

  const deleteClick = async (value) => {
    console.log(value);
    const id = value.id;
    axios
      .delete(`http://localhost:5000/api/users/home/${id}`, {
        withCredentials: true,
      })
      .then(() => {
        setvideo(
          video.filter((value) => {
            return value._id !== id;
          })
        );
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="add">
        <span className="Add_plus">
          <i onClick={click} class="fas fa-plus-square"></i>
        </span>
      </div>
      <div className="sidebar_scroll">
        {video.map((value) => {
          const playVideo = {
            id: value._id,
            videoName: value.videoName,
            videoUrl: value.videoUrl,
          };
          return (
            <div className="side_main">
              <div
                key={value._id}
                onClick={() => clickEvent(playVideo)}
                className="sidebar_content"
              >
                <div className="side_link">
                  <h4>{value.videoName}</h4>
                </div>
              </div>
              <div className="trash" onClick={() => deleteClick(playVideo)}>
                <i className="fas fa-trash-alt"></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;

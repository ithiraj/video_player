import React, { createContext, useEffect, useState } from "react";
export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [passVideo, setPassVideo] = useState({
    id: "",
    videoName: "",
    videoUrl: "https://www.youtube.com/embed/7nH2NYpeKa4",
  });
  const [vi, setvi] = useState([]);
  const [video, setvideo] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [pop, setPop] = useState(false);
  // const [select, setSelect] = useState()

  return (
    <UserContext.Provider
      value={{
        passVideo,
        setPassVideo,
        setvideo,
        video,
        setLoggedIn,
        loggedIn,
        vi,
        setvi,
        pop,
        setPop,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

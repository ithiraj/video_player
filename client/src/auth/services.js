import React from "react";
import axios from "axios";
export default {
  login: (user) => {
    console.log(user);
    return axios.post("http://localhost:5000/api/users/login", user, {
      withCredentials: true,
    });
  },
  register: (user) => {
    console.log(user);
    return axios.post("http://localhost:5000/api/users/register", user, {
      withCredentials: true,
    });
  },
  logout: () => {
    return axios
      .post("http://localhost:5000/api/users/logout")
      .then((res) => res)
      .catch((err) => console.log(err));
  },
};

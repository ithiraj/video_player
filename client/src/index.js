import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./index.css";
import { UserProvider } from "./auth/config/AuthContext";
ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.querySelector("#root")
);

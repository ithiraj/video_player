import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./auth/login";
import Register from "./auth/register";
import HomeScreen from "./screen/HomeScreen";
import PrivateRoute from "./auth/config/private";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/home" component={HomeScreen} />
        </Switch>
      </Router>
    </>
  );
};

export default App;

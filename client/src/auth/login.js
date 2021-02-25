import "./register.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import useForm from "./formValitate/useForm.js";
import { validateLogin } from "./formValitate/validate.js";

const Login = () => {
  const { handleChange, LoginhandleSubmit, values, errors, err } = useForm(
    validateLogin
  );
  return (
    <>
      <div className="form_group">
        <div className="form_box">
          <h1>Login</h1>
          <form autoComplete="on" onSubmit={LoginhandleSubmit} className="form">
            <div>
              <label>Email</label>
              <br />
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <span className="error">{errors.email}</span>
            <div>
              <label>Password</label>
              <br />
              <input
                type="password"
                name="password"
                value={values.password}
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <span className="error">{errors.password}</span>
            <div className="btn-box">
              <button className="btn" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="form_base login_base">
          <h3>
            New User?<Link to="/register">Create New User</Link>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Login;

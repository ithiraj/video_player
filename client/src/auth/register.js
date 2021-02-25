import "./register.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import useForm from "./formValitate/useForm.js";
import { validateRegister } from "./formValitate/validate.js";

const Register = () => {
  const { handleChange, RegisterhandleSubmit, values, errors, err } = useForm(
    validateRegister
  );

  return (
    <>
      <h1>{err}</h1>
      <div className="form_group">
        <div className="form_box">
          <h1>Register</h1>
          <form
            autoComplete="on"
            className="form"
            onSubmit={RegisterhandleSubmit}
          >
            <div>
              <label>Email</label>
              <br />
              <input
                type="email"
                value={values.email}
                onChange={handleChange}
                name="email"
                placeholder="Email"
              />
            </div>
            <span className="error">{errors.email}</span>
            <div>
              <label>Password</label>
              <br />
              <input
                type="password"
                value={values.password}
                onChange={handleChange}
                name="password"
                placeholder="Password"
              />
            </div>
            <span className="error">{errors.password}</span>
            <div>
              <label>Confirm Password</label>
              <br />
              <input
                onChange={handleChange}
                type="password"
                value={values.password2}
                name="password2"
                placeholder="Confirm Password"
              />
            </div>

            <span className="error">{errors.password2}</span>

            <div className="btn-box">
              <button className="btn">Register</button>
            </div>
          </form>
        </div>
        <div className="form_base ">
          <h3>
            Already Member?<Link to="/login">Login</Link>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Register;

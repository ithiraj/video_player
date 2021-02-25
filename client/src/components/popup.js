import React, { useContext } from "react";
import "./popup.css";
import usePop from "./popupFormValidate/usePop";
import validatePopup from "./popupFormValidate/validateForm";

const Popup = ({ show, click }) => {
  const { handleChange, handleSubmit, values, errors } = usePop(validatePopup);

  return show ? (
    <div>
      <div className="popup_form">
        <div className="close">
          <i onClick={click} className="fas fa-times"></i>
        </div>
        <h1>Add Video</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={values.videoName}
            name="videoName"
            placeholder="Enter Songname"
          />
          <span className="error">{errors.videoName}</span>
          <input
            type="text"
            onChange={handleChange}
            value={values.videoUrl}
            name="videoUrl"
            placeholder="Enter Song URL"
          />
          <span className="error">{errors.videoUrl}</span>
          <button type="submit">Add Song</button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;

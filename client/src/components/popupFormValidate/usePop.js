import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../auth/config/AuthContext";
const usePop = (validate) => {
  const { vi, setvi, setPop } = useContext(UserContext);
  const [values, setValues] = useState({
    videoName: "",
    videoUrl: "",
  });
  const [errors, setErrors] = useState({
    videoName: "",
    videoUrl: "",
  });
  const handleChange = async (e) => {
    const { name, value } = e.target;
    const regExp = RegExp(
      /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
    );
    switch (name) {
      case "videoName":
        errors.videoName =
          value.length < 6 ? "Videoname must be at least 6 character" : "";
        break;
      case "videoUrl":
        errors.videoUrl = regExp.test(value) ? "" : "Please enter Valid url";
        break;
      default:
        break;
    }
    setErrors(errors);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    if (
      values.videoName.length !== 0 &&
      values.videoUrl.length !== 0 &&
      errors.videoName.length === 0 &&
      errors.videoUrl.length === 0
    ) {
      // console.log(true);
      const video = { videoName: values.videoName, videoUrl: values.videoUrl };
      axios
        .post("http://localhost:5000/api/users/addvideo", video, {
          withCredentials: true,
        })
        .then((response) => {
          console.log(response.data.video);
          setvi(response.data.video);
          // console.log(vi);
          if (response.status) {
            setPop(false);
            setValues({
              videoName: "",
              videoUrl: "",
            });
          }
        });
    } else {
      console.log("invalid");
    }
  };
  return { handleChange, handleSubmit, values, errors };
};

export default usePop;

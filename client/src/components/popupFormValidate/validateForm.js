const validatePopup = (values) => {
  let errors = {};
  const regExp = RegExp(
    /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
  );
  if (!values.videoUrl) {
    errors.videoUrl = "songurl required";
  } else if (!regExp.test(values.videoUrl)) {
    errors.videoUrl = "songurl  is invalid";
  }
  if (!values.videoName) {
    errors.videoName = "song name required";
  } else if (values.videoName.length < 6) {
    errors.videoName = "Password needs to be 6 characters or more";
  }
  return errors;
};

export default validatePopup;

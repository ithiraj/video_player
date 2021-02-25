export const validateRegister = (values) => {
  let errors = {};
  const regExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
  if (!values.email) {
    errors.email = "Email required";
  } else if (!regExp.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password !== values.password2) {
    errors.password2 = "Passwords do not match";
  }
  return errors;
};

export const validateLogin = (values) => {
  let errors = {};
  const regExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
  if (!values.email) {
    errors.email = "Email required";
  } else if (!regExp.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  return errors;
};

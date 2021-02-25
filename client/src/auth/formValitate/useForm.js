import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthService from "../services";
import { UserContext } from "../../auth/config/AuthContext";

const useForm = (validate) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const { setLoggedIn } = useContext(UserContext);
  const history = useHistory();
  const [err, setErr] = useState("");
  const handleChange = async (e) => {
    const { name, value } = e.target;
    const regExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
    switch (name) {
      case "email":
        errors.email = regExp.test(value) ? "" : "Email address is invalid";
        break;
      case "password":
        errors.password =
          value.length < 6 ? "Atleast 6 characaters required" : "";
        break;
      case "password2":
        errors.password2 =
          value === values.password ? "" : "must be equal to password";
      default:
        break;
    }
    setErrors(errors);
    setValues({
      ...values,
      [name]: value,
    });
  };
  const RegisterhandleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(values));
    if (
      values.email !== "" &&
      values.password !== "" &&
      values.password2 !== "" &&
      errors.email === "" &&
      errors.password === "" &&
      errors.password2 === ""
    ) {
      const user = { email: values.email, password: values.password };
      AuthService.register(user)
        .then((res) => {
          if (res.status) {
            history.push("/login");
            setValues({
              email: "",
              password: "",
              password2: "",
            });
          }
        })
        .catch((error) => {
          return error.message;
        });
    } else {
      console.log("invalid");
    }
  };

  const LoginhandleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(values));
    if (
      values.email.length !== 0 &&
      values.password.length !== 0 &&
      errors.email.length === 0 &&
      errors.password.length === 0
    ) {
      const user = { email: values.email, password: values.password };
      await AuthService.login(user)
        .then(async (res) => {
          if (res.status) {
            setLoggedIn(true);
            history.push("/home");
            setValues({
              email: "",
              password: "",
            });
          }
        })
        .catch((error) => {
          return error.message;
        });

      setValues({
        email: "",
        password: "",
      });
    } else {
      console.log("invalid");
    }
  };
  return {
    handleChange,
    LoginhandleSubmit,
    RegisterhandleSubmit,
    values,
    errors,
    err,
  };
};

export default useForm;

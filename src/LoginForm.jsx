import React from "react";
import useFormHandler from "./useFormHandler";

const validate = (values) => {
  const errors = {};
  if (!values.username) errors.username = "Username is required";
  if (!values.password) errors.password = "Password is required";
  return errors;
};

const LoginForm = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useFormHandler({ username: "", password: "" }, validate);

  const submitForm = (data) => {
    console.log("Form submitted with:", data);
    // send to API, etc.
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <input
        type="text"
        name="username"
        value={values.username}
        onChange={handleChange}
        placeholder="Username"
      />
      {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Password"
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

import { useState } from "react";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import Input from "./Input";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    didEdit.email &&
    !isEmail(enteredValues.email) &&
    isNotEmpty(enteredValues.email);

  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValues.password, 6);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);

    setEnteredValues({
      email: "",
      password: "",
    });
  }

  function handleInputChange(event) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [event.target.name]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({ ...prevEdit, [identifier]: true }));
  }

  function handleReset() {
    // setEnteredEmail("");
    // setEnteredPassword("");
    setEnteredValues({
      email: "",
      password: "",
    });

    setDidEdit({
      email: false,
      password: false,
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          id="email"
          labelText="Email"
          type="email"
          name="email"
          onChange={handleInputChange}
          onBlur={() => handleInputBlur("email")}
          value={enteredValues.email}
          error={emailIsInvalid && "Please enter a valid email!!!"}
        />
        <Input
          labelText="Password"
          id="password"
          value={enteredValues.password}
          onChange={handleInputChange}
          onBlur={() => handleInputBlur("password")}
          type="password"
          name="password"
          error={
            passwordIsInvalid &&
            "Password should be greater than 6 characters!!!"
          }
        />
      </div>

      <p className="form-actions">
        <button
          type="button"
          onClick={handleReset}
          className="button button-flat"
        >
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

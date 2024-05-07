import { useState } from "react";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import Input from "./Input";
import { useInput } from "../hooks/useInput";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailIsInvalid,
    setEnteredValue: hanldeEmailValue,
    setDidEdit: hanldeEmailValidation,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordIsInvalid,
    setEnteredValue: hanldePasswordValue,
    setDidEdit: hanldePasswordValidation,
  } = useInput("", (value) => isNotEmpty(value) && hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();

    if (emailIsInvalid || passwordIsInvalid) return;

    console.log(emailValue, passwordValue);
  }

  function handleReset() {
    if (emailValue) {
      hanldeEmailValue("");
      hanldeEmailValidation(false);
    }
    if (passwordValue) {
      hanldePasswordValue("");
      hanldePasswordValidation(false);
    }
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
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          value={emailValue}
          error={emailIsInvalid && "Please enter a valid email!!!"}
        />
        <Input
          labelText="Password"
          id="password"
          value={passwordValue}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
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

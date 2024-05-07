import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import classes from "./AuthForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthAsync, selectAuthData } from "../features/auth/authSlice";

function AuthForm() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector(selectAuthData);
  console.log(data);

  useEffect(() => {
    // Redirect user based on response after action dispatch
    if (data.isAuthorized) {
      localStorage.setItem("auth_token", data.resData.token);

      let expiration = new Date();
      expiration.setHours(expiration.getHours() + 1);
      localStorage.setItem("expiration", expiration.toISOString());

      navigate("/");
    }
  }, [navigate, data]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const mode = searchParams.get("mode") || "login";
    const fd = new FormData(event.target);
    let data = Object.fromEntries(fd.entries());
    data.mode = mode;
    dispatch(fetchAuthAsync(data));
  };

  if (data.message) {
    return <p>{data.message}</p>;
  }
  return (
    <>
      <form onSubmit={handleSubmit} className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        {data && data.errors && (
          <>
            <p>{data.errors.message}</p>
            <ul>
              {Object.values(data.errors.errors ?? {}).map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          </>
        )}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button type="submit">Save</button>
        </div>
      </form>
    </>
  );
}

export default AuthForm;

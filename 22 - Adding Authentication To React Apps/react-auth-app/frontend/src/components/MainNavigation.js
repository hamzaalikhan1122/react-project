import { useDispatch, useSelector } from "react-redux";
import classes from "./MainNavigation.module.css";

import { NavLink, redirect, useNavigate } from "react-router-dom";
import {
  logOut,
  replaceToken,
  selectAuthData,
} from "../features/auth/authSlice";
import { useEffect } from "react";
import { getAuthToken, getTokenDuration } from "../util/auth";

function MainNavigation() {
  const authData = useSelector(selectAuthData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = getAuthToken();

  function handleLogout() {
    dispatch(logOut());
    localStorage.removeItem("auth_token");
    localStorage.removeItem("expiration");
    navigate("/auth");
  }

  useEffect(() => {
    if (!token) {
      return;
    }
    if (token === "EXPIRED") {
      handleLogout();
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);
    const timer = setTimeout(() => {
      handleLogout();
    }, tokenDuration);

    return () => {
      clearTimeout(timer);
    };
  }, [token, handleLogout, navigate]);

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive ? classes.active : undefined;
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          {authData.isAuthorized && (
            <>
              {" "}
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return isActive ? classes.active : undefined;
                  }}
                  to="events"
                >
                  Events
                </NavLink>
              </li>
            </>
          )}
          {!authData.isAuthorized && (
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? classes.active : undefined;
                }}
                to="auth"
              >
                Authentication
              </NavLink>
            </li>
          )}
          {authData?.isAuthorized && authData?.resData && (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

import { useNavigate } from "react-router-dom";
import { getAuthToken } from "../util/auth";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAuthData } from "../features/auth/authSlice";

function AuthUser({ children }) {
  const { isLoading } = useSelector(selectAuthData);
  const token = getAuthToken();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token && !isLoading) {
      navigate("/");
    }
  }, [token, isLoading, navigate]);

  if (isLoading) return <p>Loading...</p>;

  return token && children;
}

export default AuthUser;

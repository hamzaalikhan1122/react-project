import { useDispatch } from "react-redux";
import classes from "./Header.module.css";
import { logout } from "../slices/authSlice";
const Header = () => {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

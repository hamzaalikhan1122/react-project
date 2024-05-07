import { Link, NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";
function MainNavigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              //   style={({ isActive }) => ({
              //     textAlign: isActive ? "center" : "left",
              //   })}

              end
            >
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to="products"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

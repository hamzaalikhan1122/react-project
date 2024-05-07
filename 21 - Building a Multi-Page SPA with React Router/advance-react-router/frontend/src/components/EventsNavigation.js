import { Link } from "react-router-dom";
import classes from "./EventsNavigation.module.css";

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link>All Events</Link>
          </li>
          <li>
            <Link to="new">New Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default EventsNavigation;

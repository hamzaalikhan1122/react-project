import { useDispatch } from "react-redux";
import classes from "./EventItem.module.css";
import { useNavigate } from "react-router";
import { removeEventAsync } from "../features/events/eventsSlice";
import { Link } from "react-router-dom";

function EventItem({ event }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function startDeleteHandler() {
    dispatch(removeEventAsync(event.id));
    navigate("/events");
  }

  return (
    <article className={classes.event}>
      <img src={event?.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;

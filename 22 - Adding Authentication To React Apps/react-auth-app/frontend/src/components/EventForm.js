import { useNavigate } from "react-router-dom";

import classes from "./EventForm.module.css";
import { useDispatch } from "react-redux";
import { updateEventAsync } from "../features/events/eventsSlice";

function EventForm({ method, event }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function cancelHandler() {
    navigate("..");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);

    let data = Object.fromEntries(fd.entries());
    data.id = event?.id;
    const newData = {
      data,
      method,
    };
    dispatch(updateEventAsync(newData));
    navigate("/events");
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          defaultValue={event?.title}
          name="title"
          required
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          defaultValue={event?.image}
          name="image"
          required
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          defaultValue={event?.date}
          name="date"
          required
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          defaultValue={event?.description}
          rows="5"
          required
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

export default EventForm;

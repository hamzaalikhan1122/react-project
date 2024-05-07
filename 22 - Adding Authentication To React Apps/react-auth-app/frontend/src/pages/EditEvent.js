import { useSelector } from "react-redux";
import EventForm from "../components/EventForm";
import { selectEventById } from "../features/events/eventsSlice";
import { useNavigate } from "react-router";
import { useEffect } from "react";
function EditEvent() {
  const event = useSelector(selectEventById);
  const navigate = useNavigate();
  useEffect(() => {
    if (!event) {
      navigate("..");
    }
  }, [event, navigate]);

  return event && <EventForm event={event} method="PATCH" />;
}

export default EditEvent;

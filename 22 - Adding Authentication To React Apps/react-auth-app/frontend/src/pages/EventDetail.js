import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { BarLoader } from "react-spinners";
import {
  fetchEventByIdAsync,
  selectEventById,
  selectIsLoadingEvent,
} from "../features/events/eventsSlice";
import { useEffect } from "react";
import EventItem from "../components/EventItem";

function EventDetail() {
  const { eventId } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingEvent);
  const event = useSelector(selectEventById);

  useEffect(() => {
    dispatch(fetchEventByIdAsync(eventId));
  }, [dispatch, eventId]);

  if (!event && isLoading === "loading") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 100,
        }}
      >
        <BarLoader color="#36d7b7" width={300} height={7} />
      </div>
    );
  }

  return event && <EventItem event={event} />;
}

export default EventDetail;

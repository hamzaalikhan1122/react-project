import { useEffect } from "react";
import EventsList from "../components/EventsList";
import { BarLoader } from "react-spinners";

import {
  fetchAllEventsAsync,
  selectEvents,
  selectIsLoadingEvent,
} from "../features/eventsSlice";
import { useDispatch, useSelector } from "react-redux";

function Events() {
  const events = useSelector(selectEvents);
  const isLoading = useSelector(selectIsLoadingEvent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllEventsAsync());
  }, [dispatch]); // Removed `events` from the dependency array

  if (isLoading === "loading") {
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

  return <EventsList key={events.id} events={events} />;
}

export default Events;

import { Outlet } from "react-router";
import EventsNavigation from "../components/EventsNavigation";

function EventsRootLayout() {
  return (
    <div>
      <EventsNavigation />
      <Outlet />
    </div>
  );
}

export default EventsRootLayout;

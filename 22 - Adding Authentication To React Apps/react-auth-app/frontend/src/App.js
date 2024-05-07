// Challenge / Exercise

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import EventsRootLayout from "./pages/EventsRoot";
import AuthenticationPage from "./pages/Authentication";
import LogoutPage from "./pages/LogoutPage";
import AuthUser from "./components/AuthUser";
import { getAuthToken } from "./util/auth";
import { useDispatch, useSelector } from "react-redux";
import { replaceToken, selectAuthData } from "./features/auth/authSlice";
import { useEffect } from "react";

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: (
              <AuthUser>
                <EventsPage />
              </AuthUser>
            ),
          },
          {
            path: "new",
            element: (
              <AuthUser>
                <NewEventPage />
              </AuthUser>
            ),
          },
          {
            path: ":eventId",
            children: [
              {
                index: true,
                element: (
                  <AuthUser>
                    <EventDetailPage />
                  </AuthUser>
                ),
              },

              {
                path: "edit",
                element: (
                  <AuthUser>
                    <EditEventPage />
                  </AuthUser>
                ),
              },
            ],
          },
        ],
      },
      {
        path: "auth",
        element: <AuthenticationPage />,
      },
      {
        path: "auth",
        element: <LogoutPage />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  // const data = useSelector(selectAuthData);
  // console.log(data, "App Data");
  // const token = getAuthToken();
  // useEffect(() => {
  //   if (token) {
  //     dispatch(replaceToken(token));
  //   }
  // }, [token, dispatch]);
  // console.log(token, "App Token");

  return <RouterProvider router={router} />;
}
export default App;

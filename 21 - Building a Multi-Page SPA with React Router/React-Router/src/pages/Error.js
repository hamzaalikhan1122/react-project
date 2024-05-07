import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function Error() {
  return (
    <>
      <MainNavigation />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </>
  );
}

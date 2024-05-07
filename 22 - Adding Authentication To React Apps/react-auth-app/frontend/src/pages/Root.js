import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  return (
    <div>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import { selectIsAuth } from "./slices/authSlice";
import UserProfile from "./components/UserProfile";

function App() {
  const authentication = useSelector(selectIsAuth);

  return (
    <>
      {authentication && (
        <>
          <Header />
          <UserProfile />
        </>
      )}
      {!authentication && <Auth />}

      <Counter />
    </>
  );
}

export default App;

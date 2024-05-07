import { useEffect } from "react";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       navigate("/products");
  //     }, 3000);

  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }, [navigate]);

  return <h1>Home Page!</h1>;
}

export default Home;

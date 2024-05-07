import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";
function App() {
  console.log("APP COMPONENT EXECUTING");

  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;

import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";
// million-ignore
function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    setChosenCount(newCount);
    setChosenCount((prevChosenCount) => prevChosenCount + 1);
  }

  return (
    <div>
      <Header />
      <main>
        <ConfigureCounter onSetCounter={handleSetCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </div>
  );
}

export default App;

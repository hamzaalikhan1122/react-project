import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  return (
    <div>
      <h1>Hello World!</h1>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={() => setChangedText((prevText) => !prevText)}>
        Change Text!
      </button>
    </div>
  );
};

export default Greeting;

import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayer, setEnteredPlayer] = useState("");

  function handleClick() {
    setEnteredPlayer(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayer ? enteredPlayer : "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

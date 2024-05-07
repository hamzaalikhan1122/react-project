import { useState } from "react";

function Player({ initalName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initalName);
  const [isEditing, setIsEditing] = useState(false);

  function handleIsEditing() {
    setIsEditing(true);
  }

  function handlePlayerInfo() {
    if (!playerName) return;
    setIsEditing(false);
    if (isEditing) onChangeName(symbol, playerName);
  }

  function handleInputChange(event) {
    setPlayerName(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handlePlayerInfo(); // Save the player info when Enter is pressed
    }
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <>
            <input
              type="text"
              value={playerName}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown} // Use onKeyDown for detecting Enter key press
            />
            <span className="player-symbol">{symbol}</span>
            <button onClick={handlePlayerInfo}>Save</button>
          </>
        ) : (
          <>
            <span className="player-name">{playerName}</span>
            <span className="player-symbol">{symbol}</span>
            <button onClick={() => handleIsEditing()}>Edit</button>
          </>
        )}
      </span>
    </li>
  );
}

export default Player;

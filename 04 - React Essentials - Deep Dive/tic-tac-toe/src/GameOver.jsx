function GameOver({ winner, resetGame }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It&apos;s a Draw!</p>}
      <p>
        <button onClick={resetGame}>Rematch!</button>
      </p>
    </div>
  );
}

export default GameOver;

function Log({ turns }) {
  return (
    <ol id="log">
      {turns?.map((turn, index) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          <span>
            <strong>{turn.player}</strong> selected
          </span>
          , <span>{turn.square.row}</span>,<span> {turn.square.col}</span>
        </li>
      ))}
    </ol>
  );
}

export default Log;

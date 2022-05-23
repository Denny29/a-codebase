import "./styles.css";
import React, { useState } from "react";

export default function App() {
  let [playerTurn, setPlayerTurn] = useState();
  let board = ["", "", "", "", "", ""];
  let [tokens, changeTokens] = useState(board);

  return (
    <div className="App">
      <div className="board">
        <div
          className="column"
          onClick={() => togglePlayerTurn(playerTurn, setPlayerTurn)}
        >
          <Slot color={tokens[0]} loc={0} />
          <Slot color={tokens[1]} />
          <Slot color={tokens[2]} />
          <Slot color={tokens[3]} />
          <Slot color={tokens[4]} />
          <Slot color={tokens[5]} />
        </div>
      </div>

      <h1>
        It's <span id={playerTurn}> {playerTurn}'s </span> turn
      </h1>
    </div>
  );
}

function Slot(props) {
  return (
    <div
      className={"slot " + props.color}
      onClick={() => addToken(props.color, props.loc)}
    >
      {" "}
    </div>
  );
}

function addToken(board, loc) {}

function togglePlayerTurn(turn, setTurn) {
  if (turn === "Red") {
    setTurn("Yellow");
  } else {
    setTurn("Red");
  }
}

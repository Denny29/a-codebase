import "./styles.css";
import React, { useState } from "react";

export default function App() {
  let [playerTurn, setPlayerTurn] = useState("Red");

  return (
    <div className="App">
      <div className="board">
        <div
          className={"slot " + playerTurn}
          onClick={() => togglePlayerTurn(playerTurn, setPlayerTurn)}
        ></div>
      </div>

      <h1>
        It's <span id={playerTurn}> {playerTurn}'s </span> turn
      </h1>
    </div>
  );
}

function togglePlayerTurn(turn, setTurn) {
  if (turn === "Red") {
    setTurn("Yellow");
  } else {
    setTurn("Red");
  }
}

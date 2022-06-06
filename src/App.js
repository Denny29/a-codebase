import "./styles.css";
import React, { useState } from "react";

export default function App() {
  let [playerTurn, setPlayerTurn] = useState();
  let [tokens, changeTokens] = useState(["", "", "", "", "", ""]);

  return (
    <div className="App">
      <div className="board">
        <div
          className="column"
          onClick={() => togglePlayerTurn(playerTurn, setPlayerTurn)}
        >
          <Slot
            color={tokens[0]}
            turn={playerTurn}
            update={changeTokens}
            board={tokens}
            loc={0}
          />
          <Slot
            color={tokens[1]}
            turn={playerTurn}
            update={changeTokens}
            board={tokens}
            loc={1}
          />
          <Slot
            color={tokens[2]}
            turn={playerTurn}
            update={changeTokens}
            board={tokens}
            loc={2}
          />
          <Slot
            color={tokens[3]}
            turn={playerTurn}
            update={changeTokens}
            board={tokens}
            loc={3}
          />
          <Slot
            color={tokens[4]}
            turn={playerTurn}
            update={changeTokens}
            board={tokens}
            loc={4}
          />
          <Slot
            color={tokens[5]}
            turn={playerTurn}
            update={changeTokens}
            board={tokens}
            loc={5}
          />
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
      onClick={() => addToken(props.turn, props.update, props.board, props.loc)}
    >
      {" "}
    </div>
  );
}

function addToken(turn, update, board, loc) {
  board[loc] = turn;
  console.log(board);
  update(board);
}

function togglePlayerTurn(turn, setTurn) {
  if (turn === "Red") {
    setTurn("Yellow");
  } else {
    setTurn("Red");
  }
}

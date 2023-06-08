import React, { useState } from "react";
import Board from "./Board";
import "./Gamestyle.scss";
import { checkwinner } from "../Checkgame";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const win = checkwinner(board);
  const handleClick = (index) => {
    const boarrdCopy = [...board];
    if (win || boarrdCopy[index]) return;
    boarrdCopy[index] = xIsNext ? "X" : "O";
    setBoard(boarrdCopy);
    setXIsNext((xIsNext) => !xIsNext);
  };
  const handleReset = () => {
    setBoard(Array(9).fill(null));
  };
  return (
    <>
      <div>
        <Board cells={board} onClick={handleClick} />
        <div className="winner">
          {win ? `Winner is ${xIsNext ? "O" : "X"}` : "  "}
        </div>
        <button onClick={handleReset}>Reset game</button>
      </div>
    </>
  );
};
export default Game;

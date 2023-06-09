import React, { useState } from "react";
import Board from "./Board";
import "./Gamestyle.scss";
import { checkwinner } from "../Checkgame";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [moveHistory, setMoveHistory] = useState([]);
  const win = checkwinner(board);

  const handleClick = (index) => {
    const boarrdCopy = [...board];
    if (win || boarrdCopy[index]) return;
    boarrdCopy[index] = xIsNext ? "X" : "O";
    setBoard(boarrdCopy);
    setXIsNext((xIsNext) => !xIsNext);
    setMoveHistory([...moveHistory, index]);
  };
  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setMoveHistory([]);
  };
  const jumpTo = (move) => {
    // setMoveHistory(moveHistory.slice(0, move));
    setBoard(Array(9).fill(null));
    setXIsNext(move % 2 === 0);
  };
  const moves = moveHistory.map((move, index) => {
    const description = index > 0 ? `Back to step ${index}` : "";
    return (
      <div key={index}>
        <button className="backto" onClick={() => jumpTo(index)}>
          {description}
        </button>
      </div>
    );
  });
  return (
    <>
      <div>
        <Board cells={board} onClick={handleClick} />
        <div className="winner">
          {win ? `Winner is ${xIsNext ? "O" : "X"}` : "  "}
        </div>
        <button className="button" onClick={handleReset}>
          Game Start
        </button>
        <div className="Backto">{moves}</div>
      </div>
    </>
  );
};
export default Game;

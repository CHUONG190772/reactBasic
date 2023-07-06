import React, { useState } from "react";
import Board from "./Board";
import "./Gamestyle.scss";
import { checkwinner } from "../Checkgame";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [moveHistory, setMoveHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const boardSize = 3;

  const win = checkwinner(board);

  const handleClick = (index) => {
    if (win || board[index]) return;

    const boardCopy = [...board];
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext((prev) => !prev);

    const newMoveHistory = moveHistory.slice(0, currentMove + 1);
    newMoveHistory.push(boardCopy);
    setMoveHistory(newMoveHistory);
    setCurrentMove(newMoveHistory.length - 1);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setMoveHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  };

  const jumpTo = (move) => {
    setCurrentMove(move);
    setBoard(moveHistory[move]);
    setXIsNext(move % 2 === 0);
    const row = Math.floor(move / boardSize) + 1;
    const colum = (move % boardSize) + 1;
    console.log(`Row: ${row}, Colum: ${colum}`);
  };

  const moves = moveHistory.map((_, move) => {
    const description = `Go to move #${move + 1}`;
    const row = Math.floor(move / boardSize) + 1;
    const colum = (move % boardSize) + 1;
    return (
      <div key={move}>
        <button onClick={() => jumpTo(move)}>
          {description}
          <span>
            (Row: {row}, Column:{colum})
          </span>
        </button>
      </div>
    );
  });

  let status;
  if (win) {
    status = `Winner is ${xIsNext ? "O" : "X"}`;
    alert(`Winner is ${xIsNext ? "O" : "X"}`);
  } else if (board.every((cell) => cell !== null)) {
    status = "Draw";
    alert(`Draw`);
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <>
      <div>
        <Board cells={board} onClick={handleClick} />
        <div className="winner">{status}</div>
        <button className="button" onClick={handleReset}>
          Game Start
        </button>
        <div className="game-info">
          <div>{moves}</div>
          <div>
            <p>Move: {currentMove + 1}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;

import React from "react";
import Cell from "./Cell";
import { checkwinner } from "../Checkgame";

const Board = (props) => {
  // const show = () => {
  //   const cells = [null, null, null, "X", "X", "X", null, null, null];
  //   console.log(checkwinner(cells));
  // };
  return (
    <>
      <div className="game-Board">
        {props.cells.map((item, index) => (
          <Cell
            key={index}
            value={item}
            onClick={() => props.onClick(index)}
            className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
          ></Cell>
        ))}
      </div>
    </>
  );
};
export default Board;

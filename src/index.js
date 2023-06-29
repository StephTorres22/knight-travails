/* Create 8x8 chess board,

have an x and a y so can keep track of position of knight

create a knight, both visually and possibly a class of.

possibly use a 2d array to store co-ordinates, have to make sure that movement of knight is correct
and that it can't move outside of 8x8 square.*/
/* 
const chessBoardArray = new Array(8, new Array(8));

console.log(chessBoardArray); */

//creates a 2d array
/* new Array() with single parameter creates an array with that number of empty slots, not defined like [ , ,] or undefined items
need to assign them */
import "./styles.css";
import { Knight } from "./knight.js";

const boardDiv = document.querySelector(".board");
const moves = [];

class Square {
  constructor(x, y, visited) {
    this.x = x;
    this.y = y;
    this.visited = visited;
  }

  hasBeenVisited() {
    this.visited = true;
    moves.push(this);
  }
}

export const chessBoard = create2DBoardArray(8);
function makeGrid(board) {
  for (let i = 0; i < board.length; i++) {
    let row = board[i];
    row.forEach((coordinate) => {
      let square = document.createElement("div");
      boardDiv.appendChild(square);
      square.classList.add("chessSquare");
      square.innerText = `${coordinate.x},  ${coordinate.y}`;
      if (i % 2 == 0) {
        square.setAttribute("data-even", true);
      } else {
        square.setAttribute("data-even", false);
      }
    });
  }
}

function create2DBoardArray(num) {
  let board = new Array(num);

  for (let i = 0; i < num; i++) {
    board[i] = new Array(num);
    for (let j = 0; j < num; j++) {
      board[i][j] = new Square(i, j, false);
    }
  }

  return board;
}

console.log(chessBoard);

/* function assignDataForEachRow(){
    for (let i = 0; i<chessBoard.length; i++){

    }
} */

makeGrid(chessBoard);
const test = new Knight(chessBoard);
window.test = test;
window.chessBoard = chessBoard;

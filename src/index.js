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

const boardDiv = document.querySelector(".board");

const chessBoard = create2DBoardArray(8);
function makeGrid() {
  for (let i = 0; i < chessBoard.length; i++) {
    let row = chessBoard[i];
    row.forEach((coordinate) => {
      let square = document.createElement("div");
      boardDiv.appendChild(square);
      square.classList.add("chessSquare");
      square.innerText = coordinate;
      if (i% 2 == 0) {
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
      board[i][j] = `[${i}, ${j}]`;
    }
  }

  return board;
}

console.log(chessBoard);

/* function assignDataForEachRow(){
    for (let i = 0; i<chessBoard.length; i++){

    }
} */

makeGrid();

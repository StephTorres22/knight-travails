import { chessBoard } from "./index.js";

/* 8 possible moves from a position, not all are viable. */

export class Knight {
  constructor() {
    this.start = this.startingPostion();
  }

  startingPostion() {
    let possibleStart = [
      chessBoard[0][1],
      chessBoard[0][6],
      chessBoard[7][1],
      chessBoard[7][6],
    ];

    let randomPostion = Math.floor(Math.random() * possibleStart.length);
    possibleStart[randomPostion].visited = true;
    return possibleStart[randomPostion];
  }

  /* get this to half work, but hit stack overflow when I add the new ones */
  possibleMoves(board = chessBoard, x = this.start.x, y = this.start.y) {
    if (x < 0 || y < 0 || x > board.length - 1 || y > board.length - 1) {
      return null;
    }

    let potentialMove = new Node(
      x,
      y,
      this.possibleMoves(chessBoard, x + 1, y + 2), //rightDown
      this.possibleMoves(chessBoard, x + 2, y + 1), //downRight
      this.possibleMoves(chessBoard, x + 2, y - 1), //rightUp
      this.possibleMoves(chessBoard, x + 1, y - 2) //upRight,
      /*this.possibleMoves(chessBoard, x - 1, y - 2), //upLeft
      this.possibleMoves(chessBoard, x - 2, y - 1), //letfUp
      this.possibleMoves(chessBoard, x - 2, y + 1), //leftDown
      this.possibleMoves(chessBoard, x - 1, y + 2) //downLeft  */
    );

    console.log(potentialMove);

    return potentialMove;
  }
}

class Node {
  constructor(
    x,
    y,
    leftUp,
    upLeft,
    upRight,
    rightUp,
    rightDown,
    downRight,
    downLeft,
    leftDown
  ) {
    this.x = x;
    this.y = y;
    this.leftUp = leftUp;
    this.upLeft = upLeft;
    this.upRight = upRight;
    this.rightUp = rightUp;
    this.rightDown = rightDown;
    this.downRight = downRight;
    this.downLeft = downLeft;
    this.leftDown = leftDown;
  }
}

/* ossibleMoves(board = chessBoard, startPoint = this.start) {
    /* these positions are out of bounds on the board. they don't exist as coordinates. 
    

    let potentialMove = new Node(
      startPoint,
      this.possibleMoves(chessBoard, board[startPoint.x - 2][startPoint.y + 1]),
      this.possibleMoves(chessBoard, board[startPoint.x - 1][startPoint.y + 2]),
      this.possibleMoves(chessBoard, board[startPoint.x + 1][startPoint.y + 2]),
      this.possibleMoves(chessBoard, board[startPoint.x + 2][startPoint.y + 1]),
      this.possibleMoves(chessBoard, board[startPoint.x + 2][startPoint.y - 1]),
      this.possibleMoves(chessBoard, board[startPoint.x + 1][startPoint.y - 2]),
      this.possibleMoves(chessBoard, board[startPoint.x - 1][startPoint.y - 2]),
      this.possibleMoves(chessBoard, board[startPoint.x - 2][startPoint.y - 1])
    );

    return potentialMove; */

/* let leftUp,
      upLeft,
      upRight,
      rightUp,
      rightDown,
      downRight,
      downLeft,
      leftDown;
    for (let i = 0; i < board.length; i++) {
      let row = board[i];
      for (let j = 0; j < row.length; j++)
        if (row[j] === startPoint) {
          console.log(i, j);
          row[j].visited = true;
          leftUp = new Node(board[i - 2][j + 1]);
          upLeft = new Node(board[i - 1][j + 2]);
          upRight = new Node(board[i + 1][j + 2]);
          rightUp = new Node(board[i + 2][j + 1]);
          rightDown = new Node(board[i + 2][j - 1]);
          downRight = new Node(board[i + 1][j - 2]);
          downLeft = new Node(board[i - 1][j - 2]);
          leftDown = new Node(board[i - 2][j - 1]);
        }
    }

    this.possibleMoves(chessBoard, leftUp);
    this.possibleMoves(chessBoard, upLeft);
    this.possibleMoves(chessBoard, upRight);
    this.possibleMoves(chessBoard, rightUp);
    this.possibleMoves(chessBoard, rightDown);
    this.possibleMoves(chessBoard, downRight);
    this.possibleMoves(chessBoard, downLeft);
    this.possibleMoves(chessBoard, leftDown);

    return startPoint; */
/*   chessBoard.forEach((row) => {
        row.forEach((square) => {
          if (x === square.x && y === square.y) {
            square.visited = true;
          }
        });
      });
    
    
     */

/* console.log(x, y);
 
    console.log(startPoint);
  }*/

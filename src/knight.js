import { chessBoard } from "./index.js";

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

  possibleMoves(position = this.start) {
    /* want [1] && [4] parsed as ints */
    console.log(position[4]);
  }
}

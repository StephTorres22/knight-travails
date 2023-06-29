/* i've been coming at this incorrectly. 

to find min number of moves BFS is a better approach. 

means i don't have to build the whole tree of possible moves using recursion.

i only need to check all possible current moves, then move onto the children 

my function should take a starting position, where the knight is currently, and a final position. 

need to check if these are the same. if not check the children. if none of these, check their respective children, 

can still use the mechanism of setting square visited to true so that they are not repeated.


BFS uses a queue, FIFO, we can mimic this using an array in JS.

This is a BST BFS.

levelOrder() {
    //base case
    // let temp = this.root;
    if (!this.root) {
      return;
    }
    let queue = [];
    let output = [];
    queue.push(this.root);
    //queue.push(root.leftChild.data, root.rightChild.data);

    while (queue.length) {
      //is leaf node
      let temp = queue[0];
      if (temp.leftChild !== null) {
        queue.push(temp.leftChild);
      }
      if (temp.rightChild !== null) {
        queue.push(temp.rightChild);
      }
      output.push(temp.data);
      queue.shift();
    }

    return output;
  }*/

class Square {
  constructor(x, y, visited) {
    this.x = x;
    this.y = y;
    this.visited = visited;
  }
}
class Node {
  constructor(
    x,
    y,
    //child = null,
    prev = null
  ) {
    this.x = x;
    this.y = y;
    //  this.child = child;
    this.prev = prev;
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

class Knight {
  constructor(board) {
    this.startPosition = this.randomStart(board);
    this.currentPosition;
    this.moves = [
      [1, 2],
      [2, 1],
      [2, -1],
      [1, -2],
      [-1, 2],
      [-2, 1],
      [-2, -1],
      [-1, -2],
    ];
  }

  randomStart(board) {
    Math.floor(Math.random() * board.length);

    let position =
      board[Math.floor(Math.random() * board.length)][
        Math.floor(Math.random() * board.length)
      ];
    return position;
  }

  /* this gets the shorted path, but need to look at how to back track. also had to have a little look online, wouldn't have thought of using two while loops.
    still a couple of mistakes... regarding the visited state. */
  shortestPath(end, arr = this.moves) {
    let queue = [];
    queue.push(new Node(this.startPosition.x, this.startPosition.y));
    let steps = 0;
    let levels = [];
    let path = [];

    while (queue.length) {
      let nextLevel = [];

      while (queue.length) {
        let current = queue[0];
        if (current.x === end[0] && current.y === end[1]) {
          //path.push(end);
          const lastNode = () => {
            let last;
            levels[levels.length - 1].forEach((node) => {
              if (node.x === end[0] && node.y === end[1]) {
                console.log(node);
                last = node;
              }
            });
            return last;
          };

          let temp = lastNode();
          while (temp.prev) {
            path.push([temp.x, temp.y]);
            temp = temp.prev;
          }
          path.push([this.startPosition.x, this.startPosition.y]);
          //backtrack..?

          return [steps, path.reverse()];
        }

        for (let i = 0; i < arr.length; i++) {
          if (
            checkValid(current.x + arr[i][0], current.y + arr[i][1], arr) &&
            chessBoard[current.x + arr[i][0]][current.y + arr[i][1]].visited ==
              false
          ) {
            let potentialMove = new Node(
              current.x + arr[i][0],
              current.y + arr[i][1],
              current
            );

            nextLevel.push(potentialMove);
            chessBoard[current.x + arr[i][0]][
              current.y + arr[i][1]
            ].visited = true;
          }
        }
        queue.shift();
      }
      steps++;
      queue = nextLevel;
      levels.push(new Array(...nextLevel));
    }
  }
}

const chessBoard = create2DBoardArray(8);

function checkValid(x, y, arr) {
  if (x < 0 || y < 0 || x > arr.length - 1 || y > arr.length - 1) {
    return null;
  } else return true;
}

/* this only works for some cases. think the issue lies in the mutiple roots stage */
/* unction backtrack(temp, levels, count = steps, steps, arr, path, start) {
    if (temp[0] === start.x && temp[1] === start.y) {
      path.push([start.x, start.y]);
      return path;
    }
  
    /* multiple possible roots case. 
    if (
      steps + 1 === path.length &&
      path[path.length - 1][0] !== start.x &&
      path[path.length - 1][1] !== start.y
    ) {
      path.splice(1, 1);
      count += 1;
      console.log("are these met?", count);
      path.push([start.x, start.y]);
      return path.reverse();
    }
  
    console.log(count, start, levels[0], count);
    levels[count - 1].forEach((node) => {
      for (let j = 0; j < arr.length; j++) {
        if (
          checkValid(temp[0] + arr[j][0], temp[1] + arr[j][1], arr) &&
          chessBoard[temp[0] + arr[j][0]][temp[1] + arr[j][1]].visited == true &&
          node.x == temp[0] + arr[j][0] &&
          node.y == temp[1] + arr[j][1]
        ) {
          // prev = ;
  
          path.push([node.x, node.y]);
        }
      }
  
      // console.log(prev);
      //temp = prev;
    });
  
    let prev = path[path.length - 1];
    console.log(path, steps);
  
    backtrack(prev, levels, count - 1, steps, arr, path, start);
  }
   */
function randoPos(board) {
  Math.floor(Math.random() * board.length);

  let position =
    board[Math.floor(Math.random() * board.length)][
      Math.floor(Math.random() * board.length)
    ];
  return [position.x, position.y];
}

const test = new Knight(chessBoard);
console.log(test.startPosition, test.shortestPath(randoPos(chessBoard)));

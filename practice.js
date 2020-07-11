// const lines = [
//     [[0, 0], [0, 1], [0, 2]],
//     [[1, 0], [1, 1], [1, 2]],
//     [[2, 0], [2, 1], [2, 2]],
//     [[0, 0], [1, 0], [2, 0]],
//     [[0, 1], [1, 1], [2, 1]],
//     [[0, 2], [1, 2], [2, 2]],
//     [[0, 0], [1, 1], [2, 2]],
//     [[0, 2], [1, 1], [2, 0]]
//   ];
  
//   function ticTacToe(board) {
//     for (let [[a, b], [c, d], [e, f]] of lines)
//         console.log(board[a][b], board[c][d], board[e][f] );
//       if (board[a][b] === board[c][d] && board[c][d] === board[e][f])
//         return board[a][b];
  
//     return "Draw";
//   }

//   ticTacToe([
//     ["X", "O", "X"],
//     ["O", "X",  "O"],
//     ["O", "X",  "X"]
//   ])

// D = (L - S )/ L * 100
var listingPrice = 799;
var sellingPrice = 199;
var DiscountPrice = ((listingPrice - sellingPrice) / listingPrice) * 100;
console.log("Discounted percentage is" + DiscountPrice);
displayDiscountPencentage = Math.round(DiscountPrice);
console.log(displayDiscountPencentage + "% off");


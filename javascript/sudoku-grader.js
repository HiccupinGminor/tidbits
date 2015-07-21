"use strict";

/**
My solution to the "Did I Finish my Sudoku Challenge"
http://www.codewars.com/kata/did-i-finish-my-sudoku/
**/

Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
};

correct = [1,2,3,4,5,6,7,8,9];

function createColumns(board) {
  var columns = [], i, y;
  
  for(i = 0; i < board.length; i ++) {    
    for(y = 0; y < 9; y ++) {
       if(typeof columns[y] === 'undefined') {
         columns[y] = [];
       }
       columns[y].push(board[i][y]);       
    }
  }
  return columns;
}

function createSquares(board) {
  var squares = [[],[],[],[],[],[],[],[],[]];
  var sect1 = 2;
  var sect2 = 5;
  var sect3 = 8;
  
  for(y = 0; y < board.length; y++){
    for(x = 0; x < 9; x++) {
      //Assign to squares
      if(x <= sect1 && y <= sect1) {
        squares[0].push(board[y][x]);
      }
      else if(x <= sect2 && y <= sect1) {
        squares[1].push(board[y][x]);
      }
      else if(x <= sect3 && y <= sect1) {
        squares[2].push(board[y][x]);
      }
      else if(x <= sect1 && y <= sect2) {
        squares[3].push(board[y][x]);
      }
      else if(x <= sect2 && y <= sect2) {
        squares[4].push(board[y][x]);
      }
      else if(x <= sect3 && y <= sect2) {
        squares[5].push(board[y][x]);
      }
      else if(x <= sect1 && y <= sect3) {
        squares[6].push(board[y][x]);
      }
      else if(x <= sect2 && y <= sect3) {
        squares[7].push(board[y][x]);
      }
      else if(x <= sect3 && y <= sect3) {
        squares[8].push(board[y][x]);
      }
    }
  }
  return squares;
}

function doneOrNot(board){
  var rows, columns, squares, rowsValid, columnsValid;
  var failValue = "Try again!";
  var successValue = "Finished!";
  
  columns = createColumns(board);
  squares = createSquares(board);

  rowsValid = arrayIsValid(board);
  columnsValid = arrayIsValid(columns);
  squaresValid = arrayIsValid(squares);
  
  if(rowsValid === true && columnsValid === true && squaresValid === true) {
    return successValue;
  }
  else {
    return failValue;
  }
}

function arrayIsValid(multiArray) {
  for(var i = 0; i < multiArray.length; i ++ ) {
    if(isCorrect(multiArray[i]) === false) {
      return false;
    }
  }
  return true;
}

function isCorrect(testArray) {
  clone = testArray.slice(0);
  if(!clone.sort().equals(correct)) {
    return false;
  }
  return true;
}
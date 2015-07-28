"use strict";

/**
My solution to two levels arrays kata on CodeWars: http://www.codewars.com/kata/two-levels-arrays
**/

function flattenTwoLevels(array) {
  var flattened, toRemove = [], depth = 0, stringArray = JSON.stringify(array);

  for(var i = 0; i < stringArray.length; i ++) {
    var currentChar = stringArray[i];
    if(currentChar == '[') { 
      depth += 1; // Increase depth
      if(depth > 2) {
        toRemove.push(i);
      }
    }
    else if(currentChar == ']') {
      depth -= 1; // Decrease depth
      if(depth > 1) {
        toRemove.push(i);
      }
    }
  }
  
  var res = removeChars(stringArray, toRemove).replace(/,,/g, ',');

  return JSON.parse(res);
}

function removeChars(oldString, toRemove) {
  var newString = '';
  
  for(var i = 0; i < oldString.length; i ++) {
    if(toRemove.indexOf(i) == -1) {
      newString += oldString[i];
    }
  }
  
  return newString;
}
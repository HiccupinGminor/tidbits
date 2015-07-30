"use strict";

/**
My solution to Permutations kata from CodeWars: http://www.codewars.com/kata/permutations
**/
function recursePermute(string) {
  var permutations = [], firstChar, remainderString, result, remainderPermutations;
  
  if(string.length == 1) {
    permutations.push(string);
    
    return permutations;
  }
  
  for(var i = 0; i < string.length; i ++) {
    //For each of the characters. // Set one to the beginning
    firstChar = string.charAt(i);
    remainderString = string.substr(0,i) + string.substr(i+1);
    
    remainderPermutations = recursePermute(remainderString);

    for(var y = 0; y < remainderPermutations.length; y ++) {
      result = firstChar + remainderPermutations[y];
      
      if(permutations.indexOf(result) === -1) {
        permutations.push(result);
      }
    }
  }
  return permutations;
}

function permutations(string) {
  
  return recursePermute(string);
}
"use strict";

/**
My solution to Valid Parentheses kata: http://www.codewars.com/kata/valid-parentheses/ 
**/

function validParentheses(parens){
  var validCount, rtOpen, rtClosed;
  rtClosed = rtOpen = 0;
  for(var i = 0; i < parens.length; i++) {
    if(parens[i] == '(') {
      rtOpen += 1;
    }
    else {
      rtClosed += 1;
    }
    
    if (rtClosed > rtOpen)
      return false;
  } 
  return rtOpen === rtClosed;
}
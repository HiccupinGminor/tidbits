"use strict";

/** 
My solution to CodeWar's Christmas Tree kata: http://www.codewars.com/kata/christmas-tree
**/

function christmasTree(height) {
  var output = '';
  var num_chars = (2 * height) - 1;
  for(i = 1; i <= height; i++)
  {
    var num_stars = (i * 2) - 1;
    var padding = (num_chars - num_stars) / 2;
    
    //Padding represents the number of whitespaces to be inserted after each
    var padding_block = "";
    var star_block = "";
    
    var endline = "";
    if(i !== height){
      endline = "\n";
    }
    
    //Draw padding
    for(p = 0; p < padding; p++){
      padding_block += " ";
    }
    
    //Draw stars
    for(s = 0; s < num_stars; s++){
      star_block += "*";
    }
    
    output += padding_block + star_block + padding_block + endline;
  }
  return output;
}
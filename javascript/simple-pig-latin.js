"use strict";

/**
Solution to Simple Pig Latin kata on CodeWars: http://www.codewars.com/kata/simple-pig-latin/
**/
function pigIt(str){
  
  var array_of_words = str.split(" ");

  var latin_array = [];
  
  array_of_words.forEach(function(value, index, array){
    var latin_word = latinizeWord(value);
    latin_array.push(latin_word);
  });
  
  return latin_array.join(' ');
}

function latinizeWord(word){
  var first_letter = word[0];

  var truncated_word = word.substring(1);
  
  return truncated_word + first_letter + "ay";
}
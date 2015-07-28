"use strict";

// My solution to the "Where my anagrams at?" kata from CodeWars
// http://www.codewars.com/kata/where-my-anagrams-at

function anagrams(word, words) {
  var matches = [], alphaWord = word.split('').sort().join('');
  
  for(var i = 0; i < words.length; i ++) {
    // Split word out in characters
    var alphaTestWord = words[i].split('').sort().join('');
    // Compare
    if(alphaWord == alphaTestWord) {
      matches.push(words[i]);
    }
  }
  
  return matches;
}
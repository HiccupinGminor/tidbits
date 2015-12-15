"use strict";

/**
My solution to Recreate "new" Operator kata: http://www.codewars.com/kata/replicate-new/javascript 
**/

function nouveau (Constructor, ...args) {
  var obj = Object.create(Constructor.prototype);
  if(Object.isObject(Constructor())) {
    return Constructor();
  }
  else {
    Constructor.apply(obj, args); 
    return obj;
  }
}
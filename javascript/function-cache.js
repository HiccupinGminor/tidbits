"use strict";

/**
My solution to the Function Cache kata on CodeWars: http://www.codewars.com/kata/function-cache/
**/

var CacheItem = function(args){
  this.args = args;
  this.result;
};

CacheItem.prototype.setResult = function(func) {
  this.result = func.apply(this, this.args);
}

CacheItem.prototype.getResult = function() {  
  return this.result;
};

function cache(func) {
    var outer = this;
    var store = [];

    return function(){
        
        for(var i=0; i < arguments.length; i++){
          if(!arguments[i] || typeof(arguments[i]) == 'undefined'){
            return false;
          }
        }
          
        json_args = JSON.stringify(arguments);
        
        var found_cached = false;
        store.forEach(function(value, index, array){
           if(json_args == JSON.stringify(value.args)){

             //The arguments have been made before, return those results
             found_cached = true;
             result = value.getResult();
             
             return;
           }  
        });
        
        //If no cached item exists for this argument
        if(!found_cached){
          var new_item = new CacheItem(arguments);       
          store.push(new_item);
          new_item.setResult(func);
          return new_item.getResult();       
        }
        else{
          return result;
        }
    }
}
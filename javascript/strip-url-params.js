"use strict";

/**
My solution to Strip Url Params kata from CodeWars: http://www.codewars.com/kata/strip-url-params
**/

function stripUrlParams(url, paramsToStrip){

  var excludes = paramsToStrip || [];
  var urlSplit, urlBase, uniques;
  
  urlSplit = url.split('?');
  urlBase = urlSplit[0];
  
  if(!Array.isArray(urlSplit) || urlSplit.length < 2) {
    return url;
  }
  
  uniques = urlSplit[1].split('&').filter(function(item, pos, self) {
    var kvSplit, key, result;
    
    kvSplit = item.split('=');
    key = kvSplit[0]
    result = (excludes.indexOf(key) === -1);
    excludes.push(key);
    return result;
  });
 
  return (urlBase + '?' + uniques.join('&'));
}
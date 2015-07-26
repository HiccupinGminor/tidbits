/** 
My solution to Delta Bits kata from CodeWars: http://www.codewars.com/kata/delta-bits
**/

function convertBits(a, b){
  //Run a bitwise XOR
  var xor = a ^ b;
  
  //Works for positive numbers which is fine
  var bin_xor = xor.toString(2);
  
  var one_count = 0;
  for(i = 0; i < bin_xor.length; i ++)
  {
      (bin_xor[i] == 1) ? one_count ++ : one_count = one_count;
  }
  
  return one_count;
}
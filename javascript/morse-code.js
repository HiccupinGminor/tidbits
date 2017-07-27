decodeMorse = function(morseCode){
  const signals = morseCode.trim().split(' ');
  return signals.map(function(w) {
    return MORSE_CODE[w];
  }).reduce(function(a, b) {
    if(b) {
      a += b;
    }
    else if(!a.endsWith(' ')) {
      a += ' ';
    }
    return a;
  }, '');
}
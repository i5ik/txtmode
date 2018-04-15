"use strict";
{
  let b64o, words;
  try {
    b64o = require('./b64order.js');
    words = require('./words.js');
  } catch(e) {
    b64o = self.b64order;
    words = self.words;
  }

  try {
    Object.assign( self, {toWords} );
  } catch(e) {
    module.exports = toWords;
  }

  function toWords(b64s) {
    const result = [];
    const bigrams = b64s.split('').reduce( (bgs,c,i) => (console.log(c,i),(i % 2 ? bgs.push((bgs.pop()||'')+c) : bgs.push(c)), bgs), [] );
    console.log(bigrams);
    for( const bigram of bigrams ) {
      const code = b64o.atoi(bigram);
      const word = words.glyphs[code];
      result.push(word);
    }
    console.log(result);
    return result.join(' ');
  }
}

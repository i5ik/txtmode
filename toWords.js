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
    const bigrams = b64s.split('').reduce( (bgs,c,i) => ((i % 2 ? bgs.push(c) : bgs.push(bgs.pop()+c)), bgs), [] );
    for( const bigram of bigrams ) {
      const code = b64o.atoi(bigram);
      const word = words.glyphs[code];
      result.push(word);
    }
    return result.join(' ');
  }
}

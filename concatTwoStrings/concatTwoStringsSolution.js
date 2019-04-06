module.exports = function concatTwoStrings(x, y) {

  if ( typeof x === 'string' && typeof y === 'string' ) {
    return x + y;
  }
  else return undefined

}
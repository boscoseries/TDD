module.exports = function subtractTwoNumbers(x, y) {

  if ( typeof x === 'number' && typeof y === 'number' ) {
    return Number( (x - y).toFixed(2) );
  }
  else return NaN
  }  
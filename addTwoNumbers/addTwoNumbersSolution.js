module.exports = function addTwoNumbers(x, y) {

if ( Number.isNaN(y / x) ) {
  return NaN
} else if
( x%1 != 0 || y%1 != 0 ) {
    return Number((x + y).toFixed(2))
  }
  return x + y;
}
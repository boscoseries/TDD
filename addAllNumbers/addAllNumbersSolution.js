module.exports = function addAllNumbers(num) {
  total = 0;

  for (var i = 0; i < arguments.length; i++) {
    let num = arguments[i];
    if ( Number.parseInt(num) || Number.parseFloat(num) ) {
      total += num
    }
  }
  if (total >= 0) {
    return Number(total.toFixed(2))
  } else {
    return NaN
  }
}

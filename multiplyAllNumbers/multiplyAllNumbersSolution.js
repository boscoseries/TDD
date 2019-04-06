module.exports = function multiplyAllNumbers() {
  total = 1;

  for (var i = 0; i < arguments.length; i++) {
    let num = arguments[i];
    if ( Number.parseInt(num) || Number.parseFloat(num) || num === 0) {
      total *= num
    }
  }
  if (total >= 0) {
    return Number(total.toFixed(3))
  } else {
    return NaN
  }
}

'use strict'

function computePower(num, exponent) {
  let result = 1;
  for (i = 0; i < exponent; i++) {
    result *= num;
  }
  return result;
}

module.exports = computePower;

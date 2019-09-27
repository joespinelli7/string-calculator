function stringCalculator(str) {
  // splits str using regex expression, wherever the comma or newline character delimiter is into an array.
  const strArr = str.split(/,|\n/) ;

  // iterate over the strArr and check if each number is actually a number by using parseInt which will return
  // NaN if we're dealing with anything over than numbers. If element is something other than a number return 0.
  const sumArr = strArr.map(num => {
    if (parseInt(num)) {
      return parseInt(num);
    } else {
      return 0;
    }
  })

  // finally, get sum of all elements inside the array using reduce and return the final sum.
  const sum = sumArr.reduce((total, num) => total + num);
  return sum;
}

module.exports = stringCalculator;

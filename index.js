function stringCalculator(str) {
  // splits str wherever the comma delimiter is into an array.
  const strArr = str.split(/,|\n/) ;
  // array to hold all negative numbers to be returned.
  const negativeArr = [];

  // iterate over the strArr and check if each number is actually a number. First check if its a negative number
  // by using Math.sign then by using parseInt which will return NaN if we're dealing with anything over than
  // numbers. If element is something other than a number return 0.
  const sumArr = strArr.map(num => {
    if (Math.sign(parseInt(num)) === -1) {
      negativeArr.push(num);
    } else if (parseInt(num)) {
      return parseInt(num);
    } else {
      return 0;
    }
  })

  // if there are any negative numbers, throws an Error that includes the invalid numbers.
  if (negativeArr.length === 1) {
    throw new Error(`negative number ${negativeArr[0]} not allowed`);
  } else if (negativeArr.length > 1) {
    throw new Error(`negative numbers ${negativeArr.join(', ')} not allowed`);
  }

  // finally, get sum of all elements inside the array using reduce and return the final sum.
  const sum = sumArr.reduce((total, num) => total + num);
  return sum;
}

module.exports = stringCalculator;

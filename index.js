function stringCalculator(str) {
  // splits str based on regex expression (wherever a comma or new line delimiter is) into an array.
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
  negativeArrErrorThrower(negativeArr)

  // first send sumArr as param to find1000OrGreater to remove any numbers greater than 1000
  // then finally, get sum of all elements inside the array using reduce and return the final sum.
  const sum = find1000OrGreater(sumArr).reduce((total, num) => total + num);
  return sum;
}

function find1000OrGreater(arr) {
  return arr.filter(num => num < 1000)
}

function negativeArrErrorThrower(arr) {
  if (arr.length === 1) {
    throw new Error(`negative number ${arr[0]} not allowed`);
  } else if (arr.length > 1) {
    throw new Error(`negative numbers ${arr.join(', ')} not allowed`);
  }
}

module.exports = stringCalculator;

function stringCalculator(str) {
  // splits str to find whether first element is a number or custom delimiter.
  // create variable firstNum to hold value of first number to use in next if statement.
  const splitStr = str.split('');
  const firstNumStr = firstNumFinder(splitStr);

  // check if the str includes '\n' b/c if it doesn't I know we don't have a custom delimiter on our hands so only
  // have to deal with newline and comma delimiters. Otherwise, ensure that the '\n' delimiter comes before the
  // first number in the string (using indexOf), meaning we have been passed in a custom delimiter.
  let strArr;
  if (str.includes('\n') && str.indexOf('\n') < str.indexOf(firstNumStr)) {
    strArr = handleSplit(str);
  } else {
    strArr = str.split(/,|\n/);
  }

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
  negativeArrErrorThrower(negativeArr);

  // first send sumArr as param to find1000OrGreater to remove any numbers greater than 1000
  // then finally, get sum of all elements inside the array using reduce and return the final sum.
  const sum = find1000OrGreater(sumArr).reduce((total, num) => total + num);
  return sum;
}

function firstNumFinder(arr) {
  for (let char of arr) {
    if (parseInt(char)) {
      return char;
    }
  }
}

function handleSplit(str) {
  // here we handle the split of our array using regex expression that accounts for all the required delimiters
  // as well as the custom delimiter we passed in using a dynamic regex expression.
  const delimiter = str.slice(0, str.indexOf('\n'));
  const strLength = delimiter.length;
  // here, after slicing the str from the beginning to '\n', we check if the first and last characters are
  // '[' and ']' respectively. If they are we are dealing with a custom delimiter of any length.
  // Otherwise, we are dealing with a single custom delimiter so go to else statement.
  if (delimiter[0] === '[' && delimiter.charAt(strLength - 1) === ']') {
    // to find the length of the custom delimiter, simply subtract 2 to remove the brackets '[' and ']'.
    const customDelimiterLength = strLength - 2;
    const customCharacter = delimiter[1]; // => '*' (or whatever custom delimiter user passes in.)
    // add a match into dynamic regex that looks for the custom delimiter at the number of times
    // it was passed in (ex. '***' === 3 === customDelimiterLength).
    const regex = new RegExp(`,|\\n|\\${customCharacter}{${customDelimiterLength}}`,'g');
    return strArr = str.split(regex).filter(Boolean);
  } else {
    const firstChar = str.slice(0, 1);
    const regex = new RegExp(`,|\\n|\\${firstChar}`,'g');
    return strArr = str.split(regex).filter(Boolean);
  }
}

function find1000OrGreater(arr) {
  return arr.filter(num => num < 1001);
}

function negativeArrErrorThrower(arr) {
  if (arr.length === 1) {
    throw new Error(`negative number ${arr[0]} not allowed`);
  } else if (arr.length > 1) {
    throw new Error(`negative numbers ${arr.join(', ')} not allowed`);
  }
}

module.exports = stringCalculator;

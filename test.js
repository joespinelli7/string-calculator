const stringCalculator = require('./index');

test('stringCalculator function exists', () => {
  expect(typeof stringCalculator).toEqual('function');
});

test('Support a maximum of 2 numbers using a comma delimiter', () => {
  expect(stringCalculator('20')).toEqual(20);
  expect(stringCalculator('1,5000')).toEqual(5001);
  expect(stringCalculator('5,tytyt')).toEqual(5);
  expect(stringCalculator('1,2,3')).toEqual(3);
})

test('Support an unlimited number of numbers', () => {
  expect(stringCalculator('1,2,3,4,5,6,7,8,9,10,11,12')).toEqual(78);
  expect(stringCalculator('1,a,2,b,3,c')).toEqual(6);
})

test('Support a newline character as an alternative delimiter', () => {
  expect(stringCalculator('1\n2,3')).toEqual(6);
  expect(stringCalculator('5\nabc\n5\nxyz\n5')).toEqual(15);
})

test('Deny negative numbers. An exception should be thrown that includes all of the negative numbers provided', () => {
  expect(() => {
    stringCalculator('1,-2')
  }).toThrow('negative number -2 not allowed');
  expect(() => {
    stringCalculator('-1\n2,-3\n4,-5')
  }).toThrow('negative numbers -1, -3, -5 not allowed');
});

test('Ignore any number greater than 1000', () => {
  expect(stringCalculator('2,1001,6')).toEqual(8);
  expect(stringCalculator('1500\n1\n2000\n2')).toEqual(3);
});

test('Support 1 custom single character length delimiter', () => {
  expect(stringCalculator(';\n2;5')).toEqual(7);
  expect(stringCalculator('&\n5&10\n15,20')).toEqual(50);
});

test('Support 1 custom delimiter of any length', () => {
  expect(stringCalculator('[***]\n11***22***33')).toEqual(66);
  expect(stringCalculator('[$$$]\n1,2\n3$$$4')).toEqual(10);
});

test('Support multiple delimiters of any length', () => {
  expect(stringCalculator('[*][!!][r9r]\n11r9r22*33!!44')).toEqual(110);
  expect(stringCalculator('[$][!@!@#~]\n1$2!@!@#~3,4\n5')).toEqual(15);
});

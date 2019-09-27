const stringCalculator = require('./index');

test('stringCalculator function exists', () => {
expect(typeof stringCalculator).toEqual('function');
});

test('Support a maximum of 2 numbers using a comma delimiter', () => {
expect(stringCalculator('20')).toEqual(20);
expect(stringCalculator('1,5000')).toEqual(5001);
expect(stringCalculator('5,tytyt')).toEqual(5);
})

test('Support an unlimited number of numbers', () => {
expect(stringCalculator('1,2,3,4,5,6,7,8,9,10,11,12')).toEqual(78);
expect(stringCalculator('1,a,2,b,3,c')).toEqual(6);
})

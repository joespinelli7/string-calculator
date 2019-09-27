const stringCalculator = require('./index');

test('stringCalculator function exists', () => {
expect(typeof stringCalculator).toEqual('function');
});

test('Support a maximum of 2 numbers using a comma delimiter', () => {
expect(stringCalculator('20')).toEqual(20);
expect(stringCalculator('1,5000')).toEqual(5001);
expect(stringCalculator('5,tytyt')).toEqual(5);
})

const stringMethods = require('./stringMethods');
const stringLength = stringMethods.stringLength;
const reverseString = stringMethods.reverseString;

describe('Length tests', () => {
	it('Less than 1', () => {
	    expect(() => stringLength('')).toThrow('Fail: The string length should be more than 1 and least than 11');
	});

	it('More than 1', () => {
	    expect(() => stringLength('toloooooong')).toThrow('Fail: The string length should be more than 1 and least than 11');
	});

	it('HappyPath length', () => {
	    expect(stringLength('four')).toBe(4);
	});
});

describe('Reverse tests', () => {
	it('HappyPath reverse', () => {
			expect(reverseString('hola')).toBe('aloh');
	});
});


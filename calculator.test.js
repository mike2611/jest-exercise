const Calculator = require('./calculator');

describe('Add tests', () => { 
    it('Happy Path Add', () => {
        const cal = new Calculator(1,1);
        cal.add();
	    expect(cal.results).toBe(2);
	});

    it('Negative Numbers Add', () => {
        const cal = new Calculator(-1,-2);
	    expect(() => cal.add()).toThrow('Fail: You cant add negative numbers');
	});
});

describe('Substract tests', () => {
    it('Happy Path Substract', () => {
        const cal = new Calculator(1,1);
        cal.substract();
	    expect(cal.results).toBe(0);
	});

    it('Negative Numbers Substract', () => {
        const cal = new Calculator(-1,-2);
	    expect(() => cal.substract()).toThrow('Fail: You cant substract negative numbers');
	});
 });

describe('Divide tests', () => { 
    it('Happy Path Divide', () => {
        const cal = new Calculator(2,2);
        cal.divide();
	    expect(cal.results).toBe(1);
	});

    it('Zero Divide', () => {
        const cal = new Calculator(1,0);
	    expect(() => cal.divide()).toThrow('Fail: You cant divide by 0');
	});
});

describe('Multiply tests', () => { 
    it('Happy Path Multiply', () => {
        const cal = new Calculator(2,2);
        cal.multiply();
	    expect(cal.results).toBe(4);
	});

    it('Happy Path Multiply', () => {
        const cal = new Calculator(-4,2);
        cal.multiply();
	    expect(cal.results).toBe(-8,4);
	});
});
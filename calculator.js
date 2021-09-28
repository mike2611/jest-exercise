class Calculator {
  constructor(num1 = 0, num2 = 0, result = 0) {
    this.num1 = num1;
    this.num2 = num2;
    this.result = result;
  }

  get results() {
    return this.result;
  }

  add() {
	
		if (this.num1 < 1 || this.num2 < 1) {
			throw new Error('Fail: You cant add negative numbers');
		}
	
    this.result =  this.num1 + this.num2;
  }

  substract() {

		if (this.num1 < 1 || this.num2 < 1) {
			throw new Error('Fail: You cant substract negative numbers');
		}
	
    this.result = this.num1 - this.num2;
  }

	divide() {

		if (this.num1 === 0 || this.num2 === 0) {
			throw new Error('Fail: You cant divide by 0');
		}

		this.result = this.num1 / this.num2;
	}

	multiply() {
		this.result = this.num1 * this.num2;
	}
}

module.exports = Calculator;
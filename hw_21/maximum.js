let Fraction = {
  numerator: 0,
  denominator: 1,
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  },
  add(fraction) {
    const resultNumerator =
      this.numerator * fraction.denominator +
      fraction.numerator * this.denominator;
    const resultDenominator = this.denominator * fraction.denominator;
    return this.reduceFraction(resultNumerator, resultDenominator);
  },
  subtract(fraction) {
    const resultNumerator =
      this.numerator * fraction.denominator -
      fraction.numerator * this.denominator;
    const resultDenominator = this.denominator * fraction.denominator;
    return this.reduceFraction(resultNumerator, resultDenominator);
  },
  multiply(fraction) {
    const resultNumerator = this.numerator * fraction.numerator;
    const resultDenominator = this.denominator * fraction.denominator;
    return this.reduceFraction(resultNumerator, resultDenominator);
  },
  divide(fraction) {
    const resultNumerator = this.numerator * fraction.denominator;
    const resultDenominator = this.denominator * fraction.numerator;
    return this.reduceFraction(resultNumerator, resultDenominator);
  },
  reduceFraction(numerator, denominator) {
    const gcd = this.greatestCommonDivisor(numerator, denominator);
    return {
      numerator: numerator / gcd,
      denominator: denominator / gcd,
    };
  },
  greatestCommonDivisor(a, b) {
    if (b === 0) {
      return a;
    }
    return this.greatestCommonDivisor(b, a % b);
  },
};

const fraction1 = Object.create(Fraction);
fraction1.constructor(
  Number(prompt("Введіть перше число першого дробу")),
  Number(prompt("Введіть друге число першого дробу")),
);

const fraction2 = Object.create(Fraction);
fraction2.constructor(
  Number(prompt("Введіть перше число другого дробу")),
  Number(prompt("Введіть друге число другого дробу")),
);

const sum = fraction1.add(fraction2);
alert(`Додавання: ${sum.numerator}/${sum.denominator}`);

const difference = fraction1.subtract(fraction2);
alert(`Віднімання: ${difference.numerator}/${difference.denominator}`);

const product = fraction1.multiply(fraction2);
alert(`Множення: ${product.numerator}/${product.denominator}`);

const quotient = fraction1.divide(fraction2);
alert(`Ділення: ${quotient.numerator}/${quotient.denominator}`);

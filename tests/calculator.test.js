import { Calculator } from "../calculator.js";

test("calculator adds numbers", () => {
  const calculator = Calculator();
  const isCalculatorAdds5and5 = calculator.add(5, 5);
  const isCalculatorAddsMinus5and5 = calculator.add(-5, 5);

  expect(isCalculatorAdds5and5).toEqual(10);
  expect(isCalculatorAddsMinus5and5).toEqual(0);
});

test("calculator substract numbers", () => {
  const calculator = Calculator();
  const isCalcSubstract5and5 = calculator.substract(5, 5);
  const isCalcSubstract9999andM9999 = calculator.substract(9999, -9999);
  const isCalcSubstract10and5 = calculator.substract(10, 5);
  const isCalcSubstract5and10 = calculator.substract(5, 10);

  expect(isCalcSubstract5and5).toEqual(0);
  expect(isCalcSubstract9999andM9999).toEqual(19998);
  expect(isCalcSubstract10and5).toEqual(5);
  expect(isCalcSubstract5and10).toEqual(-5);
});

test("calculator divide numbers", () => {
  const calculator = Calculator();
  const isCalcDivide5and5 = calculator.divide(5, 5);
  const isCalcDivide0and5 = calculator.divide(0, 5);
  const isCalcDivide5and0 = calculator.divide(5, 0);

  expect(isCalcDivide5and5).toEqual(1);
  expect(isCalcDivide0and5).toEqual(0);
  expect(isCalcDivide5and0).toEqual(undefined);
});

test("calculatod multiplicate numbers", () => {
  const calculator = Calculator();
  const isCalcMultiply5and5 = calculator.multiply(5, 5);
  const isCalcMultiply0and5 = calculator.multiply(0, 5);
  const isCalcMultiplyM5and5 = calculator.multiply(-5, 5);

  expect(isCalcMultiply5and5).toEqual(25);
  expect(isCalcMultiply0and5).toEqual(0);
  expect(isCalcMultiplyM5and5).toEqual(-25);
});

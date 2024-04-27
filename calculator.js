function Calculator() {
  function add(a, b) {
    return a + b;
  }
  function substract(a, b) {
    return a - b;
  }
  function divide(a, b) {
    if (b === 0) {
      return undefined;
    } else {
      return a / b;
    }
  }
  function multiply(a, b) {
    return a * b;
  }

  return { add, substract, divide, multiply };
}

export { Calculator };

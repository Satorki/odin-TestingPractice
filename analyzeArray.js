function AnalyzeArray(array) {
  let object = {};

  function average() {
    const sum = array.reduce((total, currentVal) => {
      return (total += currentVal);
    }, 0);
    object.average = sum / array.length;
    return object;
  }

  function min() {
    object.min = Math.min(...array);
    return object;
  }

  function max() {
    object.max = Math.max(...array);
    return object;
  }

  function length() {
    object.length = array.length;
    return object;
  }

  return { object, average, min, max, length };
}

export { AnalyzeArray };

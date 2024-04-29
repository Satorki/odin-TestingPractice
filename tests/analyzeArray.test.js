import { AnalyzeArray } from "../analyzeArray.js";

test("Analyze Array returning for averge number", () => {
  const analyzeArray = AnalyzeArray([1, 8, 3, 4, 2, 6]);
  analyzeArray.average();
  const objectAverage4 = analyzeArray.object.average;
  expect(objectAverage4).toBe(4);
});
test("Analyze Array returning for min number", () => {
  const analyzeArray = AnalyzeArray([1, 8, 3, 4, 2, 6]);
  analyzeArray.min();
  const objectMin1 = analyzeArray.object.min;
  expect(objectMin1).toBe(1);
});
test("Analyze Array returning for max number", () => {
  const analyzeArray = AnalyzeArray([1, 8, 3, 4, 2, 6]);
  analyzeArray.max();
  const objectMax8 = analyzeArray.object.max;
  expect(objectMax8).toBe(8);
});
test("Analyze Array returning for length namber", () => {
  const analyzeArray = AnalyzeArray([1, 8, 3, 4, 2, 6]);
  analyzeArray.length();
  const objectLenght6 = analyzeArray.object.length;
  expect(objectLenght6).toBe(6);
});

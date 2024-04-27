import { sum, capitalized, reversedString } from "../testingPractice.js";

xtest("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

xtest("capitalizing string", () => {
  const isCapitalized = capitalized("lowerletters");
  expect(isCapitalized).toMatch(/[A-Z]/);
});

xtest("reversing string", () => {
  const isReversedString = reversedString("string");
  expect(isReversedString).toMatch("gnirts");
});

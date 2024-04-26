import { sum, capitalized, reversedString } from "./testingPractice.js";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("is Capitalized?", () => {
  const isCapitalized = capitalized("lowerletters");
  expect(isCapitalized).toMatch(/[A-Z]/);
});

test("is reversed string?", () => {
  const isReversedString = reversedString("string");
  expect(isReversedString).toMatch("gnirts")
})

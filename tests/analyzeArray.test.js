import { AnalyzeArray } from "../AnalyzeArray.js";

test("Cesar Cipher Wrapping form z to a", () => {
  const cesarCipher = CesarCipher("zyxwvutsrqponmlkjihgfedcba");
  const shifting1FromZtoA = cesarCipher.shift(1);
  const shifting5FromZtoA = cesarCipher.shift(5);

  expect(shifting1FromZtoA).toMatch("azyxwvutsrqponmlkjihgfedcb");
  expect(shifting5FromZtoA).toMatch("edcbazyxwvutsrqponmlkjihgf");
});

test("Cesar Cipher punctation test", () => {
    const cesarCipher= CesarCipher("AbcDe! fghIJ, kl")
    const shifting1FromAtoL = cesarCipher.shift(1)

    expect(shifting1FromAtoL).toMatch("BcdEf! ghiJK, lm")
});

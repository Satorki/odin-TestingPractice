function CesarCipher(text) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function shift(number) {
    const textArr = text.split("");
    const textArrShifted = [];

    for (let i = 0; i < textArr.length; i++) {
      let char = textArr[i];
      let shiftedChar = char;

      if (/[a-zA-Z]/.test(char)) {
        for (let j = 0; j < alphabet.length; j++) {
          if (char.toLowerCase() === alphabet[j]) {
            shiftedChar = alphabet[(j + number) % alphabet.length];
            break;
          }
        }
        if (char === char.toUpperCase()) {
          shiftedChar = shiftedChar.toUpperCase();
        }
      }

      textArrShifted.push(shiftedChar);
    }

    return textArrShifted.join("");
  }

  return { shift };
}

// const cesarCipher = CesarCipher("AbcDe! fghIJ, kl");
// console.log(cesarCipher.shift(1));
// expect(shifting1FromAtoL).toMatch("BcdEf! ghiJK, lm")

export { CesarCipher };

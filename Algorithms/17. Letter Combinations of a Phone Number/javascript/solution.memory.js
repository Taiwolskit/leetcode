/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const options = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  };

  const result = [];

  const backtrack = (combo, nextDigits) => {
    if (nextDigits.length === 0) {
      result.push(combo);
    } else {
      const digit = nextDigits.substring(0, 1);
      const letters = options[digit];
      for (let i = 0; i < letters.length; i += 1) {
        const letter = options[digit].substring(i, i + 1);
        backtrack(combo + letter, nextDigits.substring(1));
      }
    }
  };

  if (digits.length !== 0) {
    backtrack("", digits);
  }
  return result;
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) return [];

  const map = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  };

  const answer = [];

  const recurse = str => {
    if (str.length === digits.length) {
      answer.push(str);
      return;
    }

    const chars = map[digits[str.length]];

    for (let i of chars) {
      recurse(`${str}${i}`);
    }
  };

  recurse("");

  return answer;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const mapping = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

  for (const char of s) {
    if (char in mapping) {
      stack.push(char);
    } else if (mapping[stack.pop()] !== char) {
      return false;
    }
  }
  return stack.length > 0 ? false : true;
};

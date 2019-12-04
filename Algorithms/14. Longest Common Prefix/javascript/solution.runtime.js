/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return "";

  let baseWord = strs[0];
  for (let word = 1; word < strs.length; word++) {
    while (String(strs[word]).indexOf(baseWord) !== 0 && baseWord !== "") {
      baseWord = baseWord.substring(0, baseWord.length - 1);
    }
  }
  return baseWord;
};

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (words.length === 0 || s.length < words.length * words[0].length)
    return [];

  const output = [];
  const sLen = s.length;
  const wordsLen = words.length;
  const wordLen = words[0].length;
  const wordTable = {};
  const currTable = {};

  for (const word of words) {
    if (!(word in wordTable)) wordTable[word] = 0;
    wordTable[word]++;
  }

  let str = null;
  let temp = null;
  for (let i = 0; i < wordLen; i++) {
    let count = 0;
    let start = i;
    for (let r = i; r + wordLen <= sLen; r += wordLen) {
      str = s.slice(r, r + wordLen);

      if (str in wordTable) {
        currTable[str] = currTable[str] + 1 || 1;
        if (currTable[str] <= wordTable[str]) count++;

        while (currTable[str] > wordTable[str]) {
          temp = s.slice(start, start + wordLen);
          currTable[temp]--;
          start += wordLen;

          if (currTable[temp] < wordTable[temp]) count--;
        }

        if (count === wordsLen) {
          output.push(start);
          temp = s.slice(start, start + wordLen);
          currTable[temp]--;
          start += wordLen;
          count--;
        }
      } else {
        clearTable(currTable);
        count = 0;
        start = r + wordLen;
      }
    }
    clearTable(currTable);
  }

  return output;
};

function clearTable(table) {
  for (const item in table) delete table[item];
}

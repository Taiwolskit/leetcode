/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
  if (s.length < 1) return s;
  const newString = getModifiedString(s);
  let P = new Array(newString.length).fill(0);

  let center = 0;
  let rightBoundary = 0;

  for (let i = 0; i < newString.length; i++) {
    let indexMirror = center - (i - center);

    if (i < rightBoundary) P[i] = Math.min(rightBoundary - i, P[indexMirror]);

    let right = i + (P[i] + 1);
    let left = i - (P[i] + 1);

    while (
      right < newString.length &&
      left >= 0 &&
      newString[left] === newString[right]
    ) {
      P[i]++;
      right++;
      left--;
    }

    if (i + P[i] > rightBoundary) {
      center = i;
      rightBoundary = i + P[i];
    }
  }

  let leng = Math.max(...P);
  let index = P.indexOf(leng);
  return newString
    .substring(index - leng + 1, index + leng)
    .split('#')
    .join('');
};

const getModifiedString = word => {
  let newHashWord = '#';
  for (let char of word) {
    newHashWord += char;
    newHashWord += '#';
  }
  return newHashWord;
};

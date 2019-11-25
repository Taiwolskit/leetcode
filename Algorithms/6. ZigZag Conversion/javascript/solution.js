/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const lines = [];
  let direction = 1;

  for (let row = 0, i = 0; i < s.length; i++) {
    const character = s.charAt(i);
    lines[row] = !lines[row] ? character : lines[row].concat(character);

    if (row === numRows - 1) {
      direction *= -1;
    }
    if (row === 0) {
      direction = 1;
    }

    row += direction;
  }

  return lines.join("");
};

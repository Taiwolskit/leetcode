/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let expand_str = '^#' + s.split('').join('#') + '#$';
    let n = expand_str.length;
    let P = new Array(n).fill(0);
    let center = 0,
        right = 0;
    for (let i = 1; i < n - 1; i++) {
        let i_mirror = 2 * center - i;
        if (right > i) {
            P[i] = Math.min(right - i, P[i_mirror]);
        }
        while (expand_str.charAt(i + 1 + P[i]) === expand_str.charAt(i - 1 - P[i])) {
            P[i]++;
        }
        if (i + P[i] > right) {
            center = i;
            right = i + P[i];
        }
    }
    let max_len = 0,
        center_index = 0;
    for (let i = 0; i < n; i++) {
        if (P[i] > max_len) {
            max_len = P[i];
            center_index = i;
        }
    }
    return s.substring((center_index - max_len) / 2, (center_index + max_len) / 2);
};

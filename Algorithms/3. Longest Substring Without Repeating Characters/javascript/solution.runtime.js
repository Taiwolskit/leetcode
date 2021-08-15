/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const set = new Set();
    let start = 0,
        end = 0,
        max = 0;

    while (end < s.length) {

        console.log(set);
        console.log(end);
        console.log(s.charAt(end));

        if (set.has(s.charAt(end))) {
            console.log('1--------');
            console.log(s.charAt(start));
            set.delete(s.charAt(start));
            console.log(set);
            console.log('1--------');
            start++;
        } else {
            set.add(s.charAt(end));
            end++;
            max = Math.max(set.size, max);
        }
    }
    return max;
};


lengthOfLongestSubstring('abcbcee');

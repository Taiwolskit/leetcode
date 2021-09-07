/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const result = [[]];

    const fillResult = (num) =>
        result.forEach((element) => result.push([...element, num]));

    nums.forEach((num) => fillResult(num));
    return result;
};

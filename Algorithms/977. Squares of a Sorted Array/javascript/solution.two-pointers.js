/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    const n = nums.length,
        result = new Array(n).fill(0);
    let lastIndex = n - 1;

    for (let left = 0, right = n - 1; left <= right; ) {
        const leftSquare = nums[left] ** 2;
        const rightSquare = nums[right] ** 2;
        if (leftSquare < rightSquare) {
            result[lastIndex--] = rightSquare;
            right--;
        } else {
            result[lastIndex--] = leftSquare;
            left++;
        }
    }
    return result;
};

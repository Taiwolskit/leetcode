/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    const n = nums.length;
    if (n === 0) return false;

    let end = n - 1,
        start = 0;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) return true;
        if (nums[start] === nums[mid]) {
            start++;
            continue;
        }

        if (nums[mid] > nums[start]) {
            if (nums[mid] > target && target >= nums[start]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (target > nums[mid] && nums[end] >= target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    return false;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hashmap = new Map();

    for (let i = 0; i < nums.length; i++) {
        hashmap.set(nums[i], i);
    }
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (hashmap.has(complement) && hashmap.get(complement) !== i) {
            return [i, hashmap.get(complement)];
        }
    }
};

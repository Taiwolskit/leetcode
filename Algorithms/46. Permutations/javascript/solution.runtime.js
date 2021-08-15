/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const permutations = [];

    const findAllCombinations = (options, combination) => {
        if (options.length === 0) {
            permutations.push(combination);
            return;
        }
        for (let i = 0; i < options.length; i++) {
            const newOptions = options.slice();
            newOptions.splice(i, 1);
            const newCombination = [...combination, options[i]];
            findAllCombinations(newOptions, newCombination);
        }
    };

    findAllCombinations(nums, []);
    return permutations;
};

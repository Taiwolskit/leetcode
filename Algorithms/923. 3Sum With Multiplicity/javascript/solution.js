/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (arr, target) {
    const MOD = 1e9 + 7;
    const keys = [...new Set(arr)].sort();
    const count = new Map();
    for (const el of arr) {
        count.set(el, (count.get(el) || 0) + 1);
    }
    let ans = 0;

    for (let i = 0; i < keys.length; i++) {
        const x = keys[i],
            T = target - x;
        let j = i,
            k = keys.length - 1;
        while (j <= k) {
            const y = keys[j],
                z = keys[k];
            if (y + z < T) {
                j++;
            } else if (y + z > T) {
                k--;
            } else {
                if (i < j && j < k) {
                    ans += count.get(x) * count.get(y) * count.get(z);
                } else if (i === j && j < k) {
                    ans +=
                        count.get(x) *
                        Math.floor((count.get(x) - 1) / 2) *
                        count.get(z);
                } else if (i < j && j === k) {
                    ans +=
                        count.get(x) *
                        count.get(y) *
                        Math.floor((count.get(y) - 1) / 2);
                } else {
                    ans +=
                        count.get(x) *
                        (count.get(x) - 1) *
                        Math.floor((count.get(x) - 2) / 6);
                }
                j++;
                k--;
            }
        }
    }
    return ans % MOD;
};

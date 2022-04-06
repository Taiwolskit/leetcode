/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (arr, target) {
    const MOD = 1e9 + 7;
    const count = new Map();
    const keys = [];
    let ans = 0;
    for (let a of arr) {
        if (count.has(a)) {
            count.set(a, count.get(a) + 1);
        } else {
            count.set(a, 1);
            keys.push(a);
        }
    }
    keys.sort((a, b) => a - b);
    for (let i = 0; i < keys.length; i++) {
        const x = keys[i];
        const T = target - x;
        let j = i,
            k = keys.length - 1;
        while (j <= k) {
            let y = keys[j],
                z = keys[k];
            if (y + z < T) {
                j++;
            } else if (y + z > T) {
                k--;
            } else {
                if (i < j && j < k) {
                    ans += count.get(x) * count.get(y) * count.get(z);
                } else if (j === j && j < k) {
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

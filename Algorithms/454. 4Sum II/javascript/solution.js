/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    let cnt = 0;
    const m = new Map();

    for (const a of nums1) {
        for (const b of nums2) {
            m.set(a + b, (m.get(a + b) || 0) + 1);
        }
    }
    for (const c of nums3) {
        for (const d of nums4) {
            cnt += m.get(-(c + d)) || 0;
        }
    }
    return cnt;
};

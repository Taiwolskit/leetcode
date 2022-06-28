/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
    const [shortList, longList] = nums1.length < nums2.length ? [nums1, nums2] : [nums2, nums1];
    const totalLength = shortList.length + longList.length;
    let shortStartIdx = 0, shortEndIdx = shortList.length - 1;

    while (shortStartIdx <= shortEndIdx) {
        const shortMidIdx = Math.floor((shortStartIdx + shortEndIdx) / 2);
        const longMidIdx = Math.floor(totalLength / 2) - shortMidIdx  - 2;

        const shortLeft = shortMidIdx === 0 ? Number.NEGATIVE_INFINITY : shortlist[shortMidIdx - 1];

        if (shortMid < longMid) {
            shortStartIdx = shortMidIdx + 1;
        } else if (shortMid > longMid) {
            shortEndIdx = shortMidIdx - 1;
        } else {
            return shortMid;
        }
    }
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const nums1Length = nums1.length;
  const nums2Length = nums2.length;
  const smallerList = nums2Length > nums1Length ? nums1 : nums2;
  const longerList = nums2Length > nums1Length ? nums2 : nums1;

  let low = 0;
  let high = smallerList.length;

  while (low <= high) {
    const smallDivideIndex = Math.floor((low + high) / 2);
    const longDivideIndex =
      Math.floor((nums1Length + nums2Length + 1) / 2) - smallDivideIndex;

    const maxLeftSmall =
      smallDivideIndex > 0
        ? smallerList[smallDivideIndex - 1]
        : Number.NEGATIVE_INFINITY;
    const maxLeftLong =
      longDivideIndex > 0
        ? longerList[longDivideIndex - 1]
        : Number.NEGATIVE_INFINITY;
    const minRightSmall =
      smallDivideIndex >= smallerList.length
        ? Number.POSITIVE_INFINITY
        : smallerList[smallDivideIndex];
    const minRightLong =
      longDivideIndex >= longerList.length
        ? Number.POSITIVE_INFINITY
        : longerList[longDivideIndex];

    if (maxLeftSmall <= minRightLong && maxLeftLong <= minRightSmall) {
      if ((nums1Length + nums2Length) % 2 == 0) {
        return (
          (Math.max(maxLeftSmall, maxLeftLong) +
            Math.min(minRightSmall, minRightLong)) /
          2
        );
      } else {
        return Math.max(maxLeftSmall, maxLeftLong);
      }
    } else if (maxLeftSmall > minRightLong) {
      high = smallDivideIndex - 1;
    } else {
      low = smallDivideIndex + 1;
    }
  }
};

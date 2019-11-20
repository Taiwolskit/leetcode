/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const mergedArray = [];
  const totalLength = nums1.length + nums2.length;
  let i = 0,
    j = 0;
  const mid = Math.floor(totalLength / 2);

  while (i + j <= mid) {
    if (nums1[i] === undefined) {
      mergedArray[i + j] = nums2[j++];
      continue;
    }
    if (nums2[j] === undefined) {
      mergedArray[i + j] = nums1[i++];
      continue;
    }
    mergedArray[i + j] = nums2[j] > nums1[i] ? nums1[i++] : nums2[j++];
  }

  if (totalLength % 2 === 0) {
    return (
      (mergedArray[totalLength / 2 - 1] + mergedArray[totalLength / 2]) / 2
    );
  }
  return mergedArray[mid];
};

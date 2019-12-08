/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const temp = parseInt((nums1.length + nums2.length) / 2);
  let count1 = (i = j = 0);
  let current, pre;

  while (i < nums1.length && j < nums2.length && count1 <= temp) {
    pre = current;
    current = nums1[i] > nums2[j] ? nums2[j++] : nums1[i++];
    ++count1;
  }

  while (count1 <= temp) {
    pre = current;
    current = i < nums1.length ? nums1[i++] : nums2[j++];
    count1++;
  }

  if ((nums1.length + nums2.length) % 2) {
    return current;
  }
  return (current + pre) / 2.0;
};

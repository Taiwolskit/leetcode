class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        total_list = sorted(nums1 + nums2)
        list_len = len(total_list)
        middle = list_len // 2
        if list_len % 2 == 0:
            return (total_list[middle - 1] + total_list[middle]) / 2
        else:
            return total_list[middle]

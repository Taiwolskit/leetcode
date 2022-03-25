class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        short_list, long_list = nums1, nums2
        if len(nums1) > len(nums2):
            short_list, long_list = nums2, nums1

        total_len = len(nums1) + len(nums2)
        short_start_idx, short_end_idx = 0, len(short_list) - 1

        while True:
            short_val_idx = (short_start_idx + short_end_idx) // 2
            long_val_idx = (total_len) // 2 - short_val_idx - 2

            short_left = short_list[short_val_idx] if short_val_idx >= 0 else float(
                '-inf')
            long_left = long_list[long_val_idx] if long_val_idx >= 0 else float(
                '-inf')
            short_right = short_list[short_val_idx +
                                     1] if short_val_idx + 1 < len(short_list) else float('inf')
            long_right = long_list[long_val_idx +
                                   1] if long_val_idx + 1 < len(long_list) else float('inf')

            if short_left > long_right:
                short_end_idx = short_val_idx - 1
            elif long_left > short_right:
                short_start_idx = short_val_idx + 1
            else:
                if total_len % 2:
                    return min(short_right, long_right)
                else:
                    return (max(short_left, long_left) + min(short_right, long_right)) / 2

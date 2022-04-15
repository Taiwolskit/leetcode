impl Solution {
    pub fn find_median_sorted_arrays(nums1: Vec<i32>, nums2: Vec<i32>) -> f64 {
        let mut offset1 = 0;
        let mut offset2 = 0;
        let mut num1 = 0;
        let mut num2 = 0;
        let mut result:f64;
        let length = nums1.len() + nums2.len();
        loop {
            if (offset1 + offset2) * 2 > length {
                break;
            }

            num1 = num2;
            let mut move_which = 1;
            if offset1 >= nums1.len() {
                move_which = 2;
            } else if offset2 >=nums2.len() {
                move_which = 1;
            } else if nums1[offset1] > nums2[offset2] {
                move_which = 2;
            }

            if move_which == 1 {
                num2 = nums1[offset1];
                offset1 = offset1 + 1;
            } else {
                num2 = nums2[offset2];
                offset2 = offset2 + 1;
            }
        }
        if length % 2 == 0 {
            result = (num1 as f64 + num2 as f64) / 2.0;
        } else {
            result = num2 as f64;
        }
        return result;
    }
}

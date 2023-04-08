impl Solution {
    pub fn sort_colors(nums: &mut Vec<i32>) {
        // for all idx < p0 : nums[idx < p0] = 0
        // curr is an index of element under consideration
        let mut p0 = 0;
        let mut curr = 0;
        // for all idx > p2 : nums[idx > p2] = 2
        let mut p2 = nums.len() - 1;

        while curr <= p2 && p2 > 0 {
            if nums[curr] == 0 {
                nums.swap(p0, curr);
                p0 += 1;
                curr += 1;
            } else if nums[curr] == 2 {
                nums.swap(curr, p2);
                p2 -= 1;
            } else {
                curr += 1;
            }
        }
    }
}

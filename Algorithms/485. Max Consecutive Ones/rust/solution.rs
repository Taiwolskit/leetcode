impl Solution {
    pub fn find_max_consecutive_ones(nums: Vec<i32>) -> i32 {
        let mut count = 0;
        let mut max = 0;
        for num in nums {
            if num == 1 {
                count += 1;
            } else {
                max = max.max(count);
                count = 0;
            }
        }
        max.max(count) as i32
    }
}
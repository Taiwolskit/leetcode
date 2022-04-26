impl Solution {
    pub fn find_middle_index(nums: Vec<i32>) -> i32 {
        let right = nums.iter().sum::<i32>();
        let mut left = 0;

        for (idx, num) in nums.iter().enumerate() {
            match right - left - num == left {
                true => return idx as i32,
                false => left += num,
            }
        }
        -1
    }
}

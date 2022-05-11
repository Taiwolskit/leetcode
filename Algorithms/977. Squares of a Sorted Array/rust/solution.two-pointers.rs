impl Solution {
    pub fn sorted_squares(nums: Vec<i32>) -> Vec<i32> {
        let mut result = vec![0; nums.len()];
        let mut left = 0;
        let mut right = nums.len() as i32 - 1;
        for i in (0..nums.len()).rev() {
            let mut square = 0;
            let left_square = nums[left as usize] * nums[left as usize];
            let right_square = nums[right as usize] * nums[right as usize];
            if left_square > right_square {
                result[i] = left_square;
                left += 1;
            } else {
                result[i] = right_square;
                right -= 1;
            }
        }

        result
    }
}
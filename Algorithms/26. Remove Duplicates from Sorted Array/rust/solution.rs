impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        match nums.is_empty() {
            true => 0,
            false => {
                let mut i = 0;
                for j in 1..nums.len() {
                    if nums[i] != nums[j] {
                        i += 1;
                        nums[i] = nums[j];
                    }
                }
                (i + 1) as i32
            }
        }
    }
}
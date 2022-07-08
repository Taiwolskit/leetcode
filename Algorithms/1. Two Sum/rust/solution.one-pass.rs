use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut hash_map = HashMap::with_capacity(nums.len());

        for (idx, &num) in nums.iter().enumerate() {
            let complement = target - num;
            if let Some(&find_target) = hash_map.get(&complement) {
                return vec![find_target as i32, idx as i32];
            }
            hash_map.insert(num, idx);
        }

        vec![]
    }
}

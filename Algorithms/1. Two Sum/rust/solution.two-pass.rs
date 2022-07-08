use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut hash_map = HashMap::with_capacity(nums.len());

        for (idx, &num) in nums.iter().enumerate() {
            hash_map.insert(num, idx);
        }
        for (idx, &num) in nums.iter().enumerate() {
            let complement = target - num;
            if let Some(&find_target) = hash_map.get(&complement) {
                if find_target != idx {
                    return vec![idx as i32, find_target as i32];
                }
            }
        }

        vec![]
    }
}

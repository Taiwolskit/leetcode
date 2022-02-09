use std::collections::HashMap;

impl Solution {
    pub fn find_pairs(nums: Vec<i32>, k: i32) -> i32 {
        let mut counter: HashMap<i32, usize> = HashMap::with_capacity(nums.len());
        for &num in nums.iter() {
            *counter.entry(num).or_insert(0) += 1;
        }

        let mut result = 0;
        for entry in counter.iter() {
            if let Some(&val) = counter.get(&(entry.0 + k)) {
                if k != 0 || val > 1 {
                    result += 1;
                }
            }
        }
        result
    }
}

use std::collections::HashMap;

impl Solution {
    pub fn four_sum_count(nums1: Vec<i32>, nums2: Vec<i32>, nums3: Vec<i32>, nums4: Vec<i32>) -> i32 {
        let mut cnt = 0;
        let mut map = HashMap::new();
        for a in nums1.iter() {
            for b in nums2.iter() {
                *map.entry(a + b).or_insert(0) += 1;
            }
        }
        for c in nums3.iter() {
            for d in nums4.iter() {
                cnt += map.get(&-(c + d)).cloned().unwrap_or(0);
            }
        }
        return cnt;
    }
}

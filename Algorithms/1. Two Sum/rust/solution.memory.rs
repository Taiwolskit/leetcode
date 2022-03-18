impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        if nums.len() == 2 {
            return vec![0, 1];
        }

        for (i, x) in nums.iter().enumerate() {
            for (j, y) in nums.iter().enumerate().filter(|(j, _)| *j != i) {
                if x + y == target {
                    return vec![i as i32, j as i32];
                }
            }
        }

        vec![]
    }
}

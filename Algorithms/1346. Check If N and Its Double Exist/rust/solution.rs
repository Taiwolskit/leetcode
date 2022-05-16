impl Solution {
    pub fn check_if_exist(arr: Vec<i32>) -> bool {
        let mut nums = std::collections::HashSet::new();

        for num in arr.into_iter() {
            if ((num as f32 / 2 as f32).fract() == 0.0 && nums.contains(&(num / 2))) || nums.contains(&(num * 2)) {
                return true
            }
            nums.insert(num);
        }

        false
    }
}
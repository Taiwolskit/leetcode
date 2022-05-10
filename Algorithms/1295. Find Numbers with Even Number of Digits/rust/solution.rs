impl Solution {
    pub fn find_numbers(nums: Vec<i32>) -> i32 {
        return nums.iter()
            .filter(|num| num.to_string().len() %2 == 0)
            .count() as i32;
    }
}
impl Solution {
    pub fn add_digits(num: i32) -> i32 {
        return if num == 0 {
            0
        } else {
            (num - 1) % 9 + 1
        };
    }
}

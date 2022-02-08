impl Solution {
    pub fn my_atoi(s: String) -> i32 {
        let s = s.trim();
        let mut result = 0;
        let mut sign = 1;
        let mut i = 0;
        if s.len() == 0 {
            return 0;
        }
        if s.chars().nth(0) == Some('-') {
            sign = -1;
            i = 1;
        } else if s.chars().nth(0) == Some('+') {
            i = 1;
        }
        for c in s.chars().skip(i) {
            if c.is_ascii_digit() {
                result = result * 10 + (c as i32 - 48);
                if result > 2147483647 {
                    return 2147483647;
                }
            } else {
                break;
            }
        }
        return sign * result;
    }
}

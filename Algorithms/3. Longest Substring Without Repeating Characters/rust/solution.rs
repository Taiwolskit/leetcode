use std::cmp::max;
use std::collections::HashMap;

impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        let mut m = HashMap::new();
        let mut ans = 0;
        let mut i = -1;
        let mut current = 0;
        for c in s.chars() {
            if let Some(last) = m.insert(c, current) {
                i = max(i, last);
            }
            ans = max(ans, current - i);
            current += 1;
        }
        ans
    }
}

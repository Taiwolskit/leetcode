use std::collections::HashMap;

impl Solution {
    pub fn partition_labels(s: String) -> Vec<i32> {
        let mut ans = Vec::<i32>::new();
        let mut last = HashMap::<char,_>::new();
        for (i, c) in s.chars().enumerate() {
            last.insert(c, i);
        }
        let mut anchor = 0;
        let mut j = 0;
        for( i, c) in s.chars().enumerate() {
            j = j.max(*last.get(&c).unwrap());
            if i == j {
                ans.push((j - anchor + 1) as i32);
                anchor = j + 1;
            }
        }
        ans
    }
}

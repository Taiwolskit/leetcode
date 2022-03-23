impl Solution {
    pub fn broken_calc(start_value: i32, target: i32) -> i32 {
        let mut ans = 0;
        let mut diff = target;
        while diff > start_value {
            ans += 1;
            if diff & 1 == 1 {
                diff += 1;
            } else {
                diff /= 2;
            }
        }
        ans + start_value - diff
    }
}

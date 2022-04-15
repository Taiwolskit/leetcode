impl Solution {
    pub fn reverse(x: i32) -> i32 {
        let negative = x < 0;

        let mut rev = 0i32;
        let mut x = x.abs();

        while x > 0 {
            let pop = x % 10;
            let next_scale = rev.checked_mul(10);
            if next_scale.is_none() {
                return 0;
            }
            rev = next_scale.unwrap() + pop;
            x /= 10;
        }

        if negative { -rev } else { rev }
    }
}

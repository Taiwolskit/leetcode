impl Solution {
    pub fn longest_palindrome(s: String) -> String {
        let expand_str = format!(
            "^#{}#$",
            s.chars()
                .map(|c| c.to_string())
                .collect::<Vec<String>>()
                .join("#")
        );
        let n = expand_str.len();
        let mut P = vec![0; n];
        let (mut center, mut right) = (0, 0);
        for i in 1..n - 1 {
            let i_mirror = 2 * center - i;
            if right > i {
                P[i] = std::cmp::min(right - i, P[i_mirror]);
            }
            while expand_str.chars().nth(i + 1 + P[i]).unwrap()
                == expand_str.chars().nth(i - 1 - P[i]).unwrap()
            {
                P[i] += 1;
            }
            if i + P[i] > right {
                center = i;
                right = i + P[i];
            }
        }
        let max_len = *P.iter().max().unwrap();
        let center_index = P.iter().position(|&x| x == max_len).unwrap();
        s.chars()
            .skip((center_index - max_len) / 2)
            .take(max_len)
            .collect()
    }
}

impl Solution {
    pub fn find_anagrams(s: String, p: String) -> Vec<i32> {
        let s = s.as_bytes();
        let p = p.as_bytes();
        let mut indices = Vec::new();

        let mut hash = vec![0_i32; 26];
        let mut missmatches = 0;
        for b in p {
            hash[(b-b'a') as usize] += 1;
            missmatches += 1;
        }

        let pattern_len = p.len();

        for i in 0..s.len() {
            let new_index = (s[i]-b'a') as usize;
            hash[new_index] -= 1;
            if hash[new_index] >= 0 {
                missmatches -= 1;
            } else {
                missmatches += 1;
            }

            if i >= pattern_len {
                let pop_index = (s[i-pattern_len]-b'a') as usize;
                hash[pop_index] += 1;

                if hash[pop_index] <= 0 {
                    missmatches -= 1;
                } else {
                    missmatches += 1;
                }
            }

            if i >= pattern_len - 1 && missmatches == 0 {
                indices.push((i + 1 - pattern_len) as i32);
            }
        }

        indices
    }
}

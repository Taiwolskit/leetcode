impl Solution {
    pub fn minimum_abs_difference(arr: Vec<i32>) -> Vec<Vec<i32>> {
        let min_element = *arr.iter().min().unwrap();
        let max_element = *arr.iter().max().unwrap();
        let shift = -min_element;
        let mut line = vec![0; (max_element - min_element + 1) as usize];
        let mut answer = Vec::new();
        
        for &num in arr.iter() {
            line[(num + shift) as usize] = 1;
        }
        
        let mut min_pair_diff = max_element - min_element;
        let mut prev = 0;
        
        for curr in 1..=((max_element + shift) as usize) {
            if line[curr] == 0 {
                continue;
            }
            
            let diff = curr as i32 - prev;
            if diff == min_pair_diff {
                answer.push(vec![prev - shift, curr as i32 - shift]);
            } else if diff < min_pair_diff {
                answer = vec![vec![prev - shift, curr as i32 - shift]];
                min_pair_diff = diff;
            }
            prev = curr as i32;
        }
        
        answer
    }
}

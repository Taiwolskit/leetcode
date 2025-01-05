impl Solution {
    pub fn minimum_abs_difference(mut arr: Vec<i32>) -> Vec<Vec<i32>> {
        arr.sort_unstable();
        let mut min_pair_diff = i32::MAX;
        let mut answer = Vec::new();
        
        for i in 0..arr.len()-1 {
            let curr_pair_diff = arr[i+1] - arr[i];
            if curr_pair_diff == min_pair_diff {
                answer.push(vec![arr[i], arr[i+1]]);
            } else if curr_pair_diff < min_pair_diff {
                answer = vec![vec![arr[i], arr[i+1]]];
                min_pair_diff = curr_pair_diff;
            }
        }
        
        answer
    }
}

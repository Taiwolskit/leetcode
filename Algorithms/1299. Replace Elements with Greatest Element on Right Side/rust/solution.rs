impl Solution {
    pub fn replace_elements(arr: Vec<i32>) -> Vec<i32> {
        let mut mx = -1;
        let mut res = vec![-1; arr.len()];
        for i in (0..arr.len()).rev() {
            res[i] = mx;
            mx = std::cmp::max(arr[i], mx);
        }
        res
    }
}
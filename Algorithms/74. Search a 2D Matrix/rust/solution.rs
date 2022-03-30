impl Solution {
    pub fn search_matrix(matrix: Vec<Vec<i32>>, target: i32) -> bool {
        if matrix.is_empty() {
            return false;
        }
        let m = matrix.len();
        let n = matrix[0].len();

        let (mut left, mut right) = (0, m * n);
        while left < right {
            let pivot_idx = (left + right) / 2;
            let pivot_element = matrix[pivot_idx / n][pivot_idx % n];

            if target == pivot_element {
                return true;
            } else if target < pivot_element {
                right = pivot_idx;
            } else {
                left = pivot_idx + 1;
            }
        }

        false
    }
}

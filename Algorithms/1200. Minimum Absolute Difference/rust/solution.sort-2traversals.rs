impl Solution {
    pub fn minimum_abs_difference(mut arr: Vec<i32>) -> Vec<Vec<i32>> {
        // 排序原始陣列
        arr.sort_unstable();
        let mut answer = Vec::new();
        
        // 初始化最小差值
        let mut min_pair_diff = i32::MAX;
        
        // 第一次遍歷計算最小差值
        for i in 0..arr.len()-1 {
            min_pair_diff = min_pair_diff.min(arr[i+1] - arr[i]);
        }
        
        // 第二次遍歷找出所有符合最小差值的配對
        for i in 0..arr.len()-1 {
            if arr[i+1] - arr[i] == min_pair_diff {
                answer.push(vec![arr[i], arr[i+1]]);
            }
        }
        
        answer
    }
}

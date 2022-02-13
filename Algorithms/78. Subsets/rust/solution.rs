impl Solution {
    pub fn subsets(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut output = Vec::new();
        Self::backtrack(&nums, &mut output, 0, &mut Vec::new());
        return output;
    }

    pub fn backtrack(nums: &Vec<i32>, res: &mut Vec<Vec<i32>>, first: i32, curr: &mut Vec<i32>) {
        for i in first..nums.len() as i32 {
            curr.push(nums[i as usize].clone());
            Self::backtrack(nums, res, i+1, curr);
            curr.pop();
        }
        res.push(curr.clone());
    }
}

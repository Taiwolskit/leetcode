impl Solution {
    pub fn height_checker(heights: Vec<i32>) -> i32 {
        let mut sorted_heights: Vec<i32> = heights.clone();
        sorted_heights.sort();
        let mut count: i32 = 0;
        for i in 0..heights.len() {
            if heights[i] != sorted_heights[i] {
                count += 1;
            }
        }
        count
    }
}

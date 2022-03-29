impl Solution {
    pub fn find_duplicate(nums: Vec<i32>) -> i32 {
        let mut tortoise = nums[0];
        let mut hare = nums[nums[0] as usize];
        while tortoise != hare {
            tortoise = nums[tortoise as usize];
            hare = nums[nums[hare as usize] as usize];
        }

        tortoise = 0;
        while tortoise != hare {
            tortoise = nums[tortoise as usize];
            hare = nums[hare as usize];
        }
        tortoise
    }
}

impl Solution {
    pub fn num_rescue_boats(people: Vec<i32>, limit: i32) -> i32 {
        let mut people = people;
        people.sort_unstable();
        let (mut i, mut j) = (0, people.len() - 1);
        let mut ans = 0;
        while i < j {
            if people[i] + people[j] <= limit {
                i += 1;
            }
            j -= 1;
            ans += 1;
        }
        ans + if i == j { 1 } else { 0 }
    }
}

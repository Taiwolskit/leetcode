impl Solution {
    pub fn maximum_wealth(accounts: Vec<Vec<i32>>) -> i32 {
        let mut wealth = 0;
        for account in accounts {
            let mut wealth_account = 0;
            for wealth_person in account {
                wealth_account += wealth_person;
            }
            wealth = std::cmp::max(wealth, wealth_account);
        }
        wealth
    }
}

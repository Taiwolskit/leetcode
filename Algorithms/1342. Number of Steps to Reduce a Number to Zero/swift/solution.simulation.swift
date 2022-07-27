class Solution {
    func numberOfSteps(_ num: Int) -> Int {
        var steps: Int = 0
        var num: Int = num
        while num > 0 {
            if num % 2 == 0 {
                num /= 2
            } else {
                num -= 1
            }
            steps += 1
        }
        return steps
    }
}

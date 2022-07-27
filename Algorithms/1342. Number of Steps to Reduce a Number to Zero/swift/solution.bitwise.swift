class Solution {
    func numberOfSteps(_ num: Int) -> Int {
        guard num != 0 else {
            return 0
        }

        var steps: Int = 0
        var powerOfTwo: Int = 1
        while powerOfTwo <= num {
            if num & powerOfTwo != 0 {
                steps += 1
            }
            powerOfTwo *= 2
            steps += 1
        }
        return steps - 1
    }
}

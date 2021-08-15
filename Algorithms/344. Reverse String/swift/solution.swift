class Solution {
    func reverseString(_ s: inout [Character]) {
        // s.reverse()
        let middel = Int(s.count / 2)
        for i in 0..<middel {
            let temp = s[i]
            s[i] = s[s.count - 1 - i]
            s[s.count - 1 - i] = temp
        }
    }
}

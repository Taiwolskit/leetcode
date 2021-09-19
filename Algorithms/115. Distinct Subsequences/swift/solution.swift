class Solution {
    func numDistinct(_ s: String, _ t: String) -> Int {
        if s.count < t.count { return 0 }
        if s.count == t.count { return s == t ? 1 : 0 }

        let s = Array(s), t = Array(t)
        let m = s.count
        let n = t.count
        var arr = Array(repeating: 0, count: n+1)
        arr[0]=1
        for i in 1...m {
            var pre = 1
            for j in 1..<i+m-n+1 {
                if j > n { break }
                let cur = arr[j]
                if s[i-1] == t[j-1] && arr[j-1] != 0 {
                    arr[j] += pre
                }
                pre = cur
            }
        }
        return arr[n]
    }
}

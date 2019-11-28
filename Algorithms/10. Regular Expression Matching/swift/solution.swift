struct TwoInt: Hashable {
    let first: Int
    let second: Int
}

class Solution {
    var dp: [TwoInt: Bool] = [:]
    
    func isMatch(_ s: String, _ p: String) -> Bool {
        let sChars = Array(s)
        let pChars = Array(p)
        return isMatch(sChars, 0, pChars, 0)
    }
    
    func isMatch(_ s: [Character],_ sIndex: Int,_ p: [Character],_ pIndex: Int) -> Bool {
        if let result = dp[TwoInt(first: sIndex, second: pIndex)] {
            return result
        }
        
        var result: Bool = false
        if s.count - sIndex == 0 && p.count - pIndex == 0 {
            result = true
        } else if s.count - sIndex == 0 {
            result = ((p.count - pIndex) % 2 == 0)
            for i in pIndex..<p.count {
                if (i - pIndex) % 2 == 1 {
                    if p[i] != "*" {
                        result = false
                    }
                }
            }
        } else if p.count - pIndex == 0 {
            result = false
        } else {
            if p[pIndex] == s[sIndex] || p[pIndex] == "." {
                if pIndex + 1 < p.count && p[pIndex + 1] == "*" {
                    result = isMatch(s, sIndex + 1, p, pIndex) || isMatch(s, sIndex, p, pIndex + 2)
                } else {
                    return isMatch(s, sIndex + 1, p, pIndex + 1)
                }
            } else {
                if pIndex + 1 < p.count && p[pIndex + 1] == "*" {
                    result = isMatch(s, sIndex, p, pIndex + 2)
                } else {
                    result = false
                }
            }
        }
        dp[TwoInt(first: sIndex, second: pIndex)] = result
        return result
    }
}
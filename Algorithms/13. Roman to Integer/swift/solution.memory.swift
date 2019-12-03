class Solution {
    func romanToInt(_ s: String) -> Int {
        let dict = ["I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000]
        var value = 0;
        for index in s.indices {
            let curStr = String(s[index])
            if index == s.index(before: s.endIndex) || dict[curStr]! >= dict[String(s[s.index(after: index)])]! {
                value += dict[curStr]!
            }
            else{
                value -= dict[curStr]!
            }
        }
        return value
    }
}

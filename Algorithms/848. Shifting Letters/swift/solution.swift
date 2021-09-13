class Solution {
    func shiftingLetters(_ S: String, _ shifts: [Int]) -> String {
        var sum = shifts.reduce(0, +)
        var aux = [Int](repeating: 0, count: shifts.count)
        var s = 0
        for i in 0 ..< shifts.count {
            aux[i] = s
            s += shifts[i]
            s %= 26
        }
        var ts = aux.map {(sum - $0) % 26}
        var asc = S.unicodeScalars.filter{$0.isASCII}.map {$0.value}.enumerated().map {$0.1+UInt32(ts[$0.0])}
        var res = ""
        res.unicodeScalars.append(contentsOf: asc.map{Unicode.Scalar(($0-97)%26 + 97)!})
        return res
    }
}

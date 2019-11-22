class Solution {
    func convert(_ s: String, _ numRows: Int) -> String {
        if numRows == 1 { return s }

        let string = s.utf8CString
        let length = string.count - 1

        var result: [CChar] = []
        result.reserveCapacity(string.count)

        for i in 0..<numRows {
            var j = i
            let jump = 2 * (numRows - 1)

            while j < length {
                result.append(string[j])

                let next = j + jump - 2 * i
                if i != 0 && i != (numRows - 1) && next < length {
                    result.append(string[next])
                }

                j += jump
            }
        }

        result.append(0)
        return String(utf8String: &result)!
    }
}
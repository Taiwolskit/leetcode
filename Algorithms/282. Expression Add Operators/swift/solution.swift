class Solution {
    func addOperators(_ num: String, _ target: Int) -> [String] {
        var numArr = Array(num).map {Int(String($0))!}
        var result = [String]()
        helper(numArr, target, 0, 0, 0, "", &result)
        return result
    }

    func helper(_ num: [Int],
                _ target: Int,
                _ index: Int,
                _ eval: Int,
                _ prevNum: Int,
                _ path: String,
                _ result: inout [String]) {
        if target == eval && num.count == index {
            result.append(path)
            return
        }

        if index == num.count {
            return
        }

        for i in index..<num.count {
            if index != i && num[index] == 0 {
                break
            }

            var val = 0
            for j in index..<i+1 where j < num.count {
                val *= 10
                val += num[j]
            }

            if index == 0 {
                helper(num, target, i+1, val, val, "\(val)", &result)
            } else {
                helper(num, target, i+1, eval+val, val, path+"+\(val)", &result)
                helper(num, target, i+1, eval-val, -val, path+"-\(val)", &result)
                helper(num, target, i+1, eval-prevNum+(val*prevNum), (val*prevNum), path+"*\(val)", &result)
            }
        }
    }
}

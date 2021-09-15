class Solution {
    func maxTurbulenceSize(_ arr: [Int]) -> Int {
        guard arr.count > 1 else { return arr.count }
		var res = 1
		var dir = arr[1] < arr[0]
        var curr = 2
        for i in 1..<arr.count {
            let lessThan = arr[i] < arr[i-1]
            if arr[i] == arr[i-1] {
                curr = 1
            } else {
                curr = (dir != lessThan) ? curr + 1 : 2
            }
            dir = lessThan
            res = max(res, curr)
        }
        return res
    }
}

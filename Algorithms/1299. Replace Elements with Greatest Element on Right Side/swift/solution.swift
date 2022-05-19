class Solution {
    func replaceElements(_ arr: [Int]) -> [Int] {
        var mx: Int = -1
        var res: [Int] = arr
        for i in (0..<arr.count).reversed() {
            res[i] = mx
            mx = max(mx, arr[i])
        }
        return res
    }
}
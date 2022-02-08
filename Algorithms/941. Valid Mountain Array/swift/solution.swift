class Solution {
    func validMountainArray(_ arr: [Int]) -> Bool {
        let N = arr.count
        guard N > 2 else { return false }
        var i = 0
        while i < N - 1 && arr[i] < arr[i + 1] {
            i += 1
        }
        if i == 0 || i == N - 1 {
            return false
        }
        while i < N - 1 && arr[i] > arr[i + 1] {
            i += 1
        }
        return i == N - 1
    }
}

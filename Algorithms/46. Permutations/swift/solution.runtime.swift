class Solution {
    func permute(_ nums: [Int]) -> [[Int]] {
        var numbers = nums
        var rst = Set<[Int]>()
        swapItems(&numbers, 0, &rst)
        return Array(rst)
    }

    private func swapItems(_ arr: inout [Int], _ index: Int, _ rst: inout Set<[Int]>) {
        guard index < arr.count - 1 else {
            rst.insert(arr)
            return
        }
        for i in index..<arr.count {
            arr.swapAt(index, i)
            swapItems(&arr, index + 1, &rst)
            arr.swapAt(index, i)
        }
    }
}

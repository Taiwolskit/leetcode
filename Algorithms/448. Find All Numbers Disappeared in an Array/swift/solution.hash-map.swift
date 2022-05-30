class Solution {
    func findDisappearedNumbers(_ nums: [Int]) -> [Int] {
        var hashTable: [Int: Bool] = [Int: Bool]()
        for num: Int in nums {
            hashTable[num] = true
        }

        var result: [Int] = [Int]()
        for i: Int in 1...nums.count {
            if hashTable[i] == nil {
                result.append(i)
            }
        }
        return result
    }
}

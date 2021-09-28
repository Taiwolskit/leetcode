class Solution {
    func sortArrayByParityII(_ nums: [Int]) -> [Int] {
        var result = [Int](repeating: 0, count: nums.count)
        var even = 0
        var odd = 1

        for num in nums{
            if num%2 == 0{
                result[even] = num
                even += 2
            }else{
                result[odd] = num
                odd += 2
            }
        }
        return result
    }
}

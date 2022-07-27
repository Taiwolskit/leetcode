class Solution {
    func numberOfSteps(_ num: Int) -> Int {
        let binary: String = String(num, radix: 2)
        let ones: Int = binary.filter { $0 == "1" }.count
        return ones + binary.count - 1
    }
}

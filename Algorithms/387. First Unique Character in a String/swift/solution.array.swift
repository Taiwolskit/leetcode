class Solution {

    func firstUniqChar(_ s: String) -> Int {
        let a: Int = Int(Character("a").asciiValue!)

        var count: [Int] = Array(repeating: 0, count: 26)
        for char: String.UTF8View.Element in s.utf8 {
            let offset: Int = Int(char) - a
            count[offset] = count[offset] + 1
        }

        for (index, char) in s.utf8.enumerated() {
            let offset: Int = Int(char) - a
            if count[offset] == 1 {
                return index
            }
        }
        return -1
    }
}

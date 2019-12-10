class Solution {
    func letterCombinations(_ digits: String) -> [String] {
        var map: [Character: [Character]] = [
            "2": ["a", "b", "c"],
            "3": ["d", "e", "f"],
            "4": ["g", "h", "i"],
            "5": ["j", "k", "l"],
            "6": ["m", "n", "o"],
            "7": ["p", "q", "r", "s"],
            "8": ["t", "u", "v"],
            "9": ["w", "x", "y", "z"]
        ]
        let digits = Array(digits)
        var res = [String]()
        var cur = [Character]()
        func dfs(_ input: [Character], _ index: Int, _ cur: inout [Character]) {
            if index == 0 {
                guard !cur.isEmpty else { return }
                res.append(String(cur))
            } else {
                let i = input.count - index
                for ch in map[input[i]]! {
                    cur.append(ch)
                    dfs(input, index - 1, &cur)
                    cur.removeLast()
                }
            }
        }
        dfs(digits, digits.count, &cur)
        return res
    }
}
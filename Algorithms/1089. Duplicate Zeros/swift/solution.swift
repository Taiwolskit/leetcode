class Solution {
    func duplicateZeros(_ arr: inout [Int]) {
        var possibleDups: Int = 0
        var length_: Int = arr.count - 1
        for i in 0...length_ {
            if i > length_ - possibleDups {
                break
            }

            if arr[i] == 0 {
                if i == length_ - possibleDups {
                    arr[length_] = 0
                    length_ -= 1
                    break
                }

                possibleDups += 1
            }
        }

        var i: Int = length_ - possibleDups
        while i >= 0 {
            arr[i + possibleDups] = arr[i]
            if arr[i] == 0 {
                possibleDups -= 1
                arr[i + possibleDups] = arr[i]
            }
            i -= 1
        }
    }
}

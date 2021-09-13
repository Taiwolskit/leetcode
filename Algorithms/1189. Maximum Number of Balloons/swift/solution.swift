class Solution {
    func maxNumberOfBalloons(_ text: String) -> Int {
        var charSet: [Character: Int] = [:]
        for c in text {
            charSet[c, default: 0] += 1
        }

        var minimumValue = Int.max
        for c in "ban" {
            minimumValue = min(charSet[c, default: 0], minimumValue)
        }

        for c in "lo" {
            minimumValue = min(charSet[c, default: 0] / 2, minimumValue)
        }

        return minimumValue
    }
}

class Solution {
    func slowestKey(_ releaseTimes: [Int], _ keysPressed: String) -> Character {
        let keysPressed = Array(keysPressed)
        var result = Character("?"), maxDiff = Int.min, lastTime = 0

        for i in 0..<keysPressed.count {
            let diff = releaseTimes[i] - lastTime
            lastTime = releaseTimes[i]
            if diff > maxDiff || diff == maxDiff && keysPressed[i] > result {
                maxDiff = diff
                result = keysPressed[i]
            }
        }
        return result
    }
}

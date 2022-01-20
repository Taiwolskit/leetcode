class Solution {
    fun minEatingSpeed(piles: IntArray, h: Int): Int {
        var left = 1
        var right = 0
        for (pile in piles) {
            right = Math.max(right, pile)
        }

        while (left < right) {
            var middle = (left + right) / 2
            var hourSpent = 0

            for (pile in piles) {
                hourSpent += Math.ceil(pile.toDouble() / middle).toInt()
            }

            if (h >= hourSpent) {
                right = middle
            } else {
                left = middle + 1
            }
        }

        return right
    }
}

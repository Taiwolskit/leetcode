class Solution {
    fun canPlaceFlowers(flowerbed: IntArray, n: Int): Boolean {
        var counter = 0
        for (i in flowerbed.indices) {
            if (flowerbed[i] == 0 && (i == 0 || flowerbed[i-1] == 0) && (i == flowerbed.lastIndex || flowerbed[i+1] == 0)) {
                flowerbed[i] = 1
                counter++
            }
            if (counter >= n) return true
        }

        return false
    }
}

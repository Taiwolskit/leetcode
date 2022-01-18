class Solution {
    func canPlaceFlowers(_ flowerbed: [Int], _ n: Int) -> Bool {
        var count = 0
        var tmpFlowerbed = flowerbed
        for i in 0..<flowerbed.count {
            if tmpFlowerbed[i] == 0 && (i == 0 || tmpFlowerbed[i - 1] == 0) && (i == flowerbed.count - 1 || tmpFlowerbed[i + 1] == 0) {
                tmpFlowerbed[i] = 1
                count += 1
            }

            if count >= n {
                return true
            }
        }

        return false
    }
}

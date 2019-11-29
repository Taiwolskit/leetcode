class Solution {
    func maxArea(_ height: [Int]) -> Int {
      var left = 0, right = height.count - 1
      var currentMax = 0

      while left < right {
        currentMax = max(min(height[left], height[right]) * (right - left), currentMax)

        if height[left] > height[right] {
          right -= 1
        } else {
          left += 1
        }
      }

      return currentMax
    }
}
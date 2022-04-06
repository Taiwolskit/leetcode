class Solution {
  func maxArea(_ height: [Int]) -> Int {
    var left = 0
    var right = height.count - 1
    var area = 0

    while left < right {
      area = max(area, min(height[left], height[right]) * (right - left))

      if height[right] > height[left] {
        left += 1
      } else {
        right -= 1
      }
    }

    return area
  }
}

func maxArea(height []int) int {
	left, right, area := 0, len(height)-1, 0
	var vol int
	for left < right {
		if height[right] > height[left] {
			vol = (right - left) * height[left]
			left++
		} else {
			vol = (right - left) * height[right]
			right--
		}
		if vol > area {
			area = vol
		}
	}
	return area
}

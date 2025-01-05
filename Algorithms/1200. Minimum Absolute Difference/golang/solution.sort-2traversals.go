import (
	"math"
	"sort"
)

func minimumAbsDifference(arr []int) [][]int {
	// 排序原始陣列
	sort.Ints(arr)
	answer := [][]int{}

	// 初始化最小差值
	minPairDiff := math.MaxInt32

	// 第一次遍歷計算最小差值
	for i := 0; i < len(arr)-1; i++ {
		minPairDiff = min(minPairDiff, arr[i+1]-arr[i])
	}

	// 第二次遍歷找出所有符合最小差值的配對
	for i := 0; i < len(arr)-1; i++ {
		if arr[i+1]-arr[i] == minPairDiff {
			answer = append(answer, []int{arr[i], arr[i+1]})
		}
	}

	return answer
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

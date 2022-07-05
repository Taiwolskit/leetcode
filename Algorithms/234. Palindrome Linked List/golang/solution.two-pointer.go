/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func isPalindrome(head *ListNode) bool {
	var (
		vals        []int
		currentNode *ListNode = head
	)
	for currentNode != nil {
		vals = append(vals, currentNode.Val)
		currentNode = currentNode.Next
	}
	var (
		left  int = 0
		right int = len(vals) - 1
	)
	for ; left < right; left, right = left+1, right-1 {
		if vals[left] != vals[right] {
			return false
		}
	}
	return true
}
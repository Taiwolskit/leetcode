/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func hasCycle(head *ListNode) bool {
	var nodesSeen = make(map[*ListNode]bool)
	for head != nil {
		if nodesSeen[head] {
			return true
		}
		nodesSeen[head] = true
		head = head.Next
	}
	return false
}
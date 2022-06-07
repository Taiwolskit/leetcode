/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func detectCycle(head *ListNode) *ListNode {
	var visited = make(map[*ListNode]bool)

	node := head
	for node != nil {
		if visited[node] {
			return node
		}
		visited[node] = true
		node = node.Next
	}
	return nil
}
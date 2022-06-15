/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func getIntersectionNode(headA, headB *ListNode) *ListNode {
	var nodesInB = make(map[*ListNode]bool)

	for headB != nil {
		nodesInB[headB] = true
		headB = headB.Next
	}

	for headA != nil {
		if nodesInB[headA] {
			return headA
		}
		headA = headA.Next
	}
	return nil
}
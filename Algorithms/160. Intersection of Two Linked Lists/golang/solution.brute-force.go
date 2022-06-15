/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func getIntersectionNode(headA, headB *ListNode) *ListNode {
	for headA != nil {
		var pB *ListNode = headB

		for pB != nil {
			if headA == pB {
				return headA
			}
			pB = pB.Next
		}
		headA = headA.Next
	}
	return nil
}
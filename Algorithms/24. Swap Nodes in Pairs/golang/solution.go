/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func swapPairs(head *ListNode) *ListNode {
	dummy := &ListNode{Next: head}
	prevNode := dummy

	for head != nil && head.Next != nil {
		firstNode, secondNode := head, head.Next

		prevNode.Next = secondNode
		firstNode.Next = secondNode.Next
		secondNode.Next = firstNode

		prevNode = firstNode
		head = firstNode.Next
	}

	return dummy.Next
}

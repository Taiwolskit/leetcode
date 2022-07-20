/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func rotateRight(head *ListNode, k int) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}

	var oldTail *ListNode = head
	var n int = 1
	for oldTail.Next != nil {
		oldTail = oldTail.Next
		n++
	}
	oldTail.Next = head

	var newTail *ListNode = head
	for i := 0; i < n-k%n-1; i++ {
		newTail = newTail.Next
	}
	newHead := newTail.Next
	newTail.Next = nil
	return newHead
}
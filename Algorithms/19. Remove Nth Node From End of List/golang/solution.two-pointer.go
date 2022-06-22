/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeNthFromEnd(head *ListNode, n int) *ListNode {
	dummy := &ListNode{0, head}
	first := head
	length := 0

	for first != nil {
		length++
		first = first.Next
	}

	first = dummy
	for i := length - n; i > 0; i-- {
		first = first.Next
	}
	first.Next = first.Next.Next
	return dummy.Next
}
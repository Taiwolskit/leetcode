/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func swapPairs(head *ListNode) *ListNode {
	temp1 := new(ListNode)
	temp2 := new(ListNode)
	temp1 = nil
	temp2 = nil
	current := head
	if current == nil || current.Next == nil {
		return current
	}

	for current != nil && current.Next != nil {
		if temp1 != nil {
			temp1.Next.Next = current.Next
		}
		temp1 = current.Next
		current.Next = current.Next.Next
		temp1.Next = current
		if temp2 == nil {
			temp2 = temp1
		}
		current = current.Next
	}
	return temp2
}
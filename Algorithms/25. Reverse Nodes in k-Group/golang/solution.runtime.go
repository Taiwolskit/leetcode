/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseKGroupFunc(head *ListNode, tail *ListNode) *ListNode {
	if head == tail {
		return tail
	}
	temp := reverseKGroupFunc(head.Next, tail)
	temp.Next = head
	return head
}

func reverseKGroup(head *ListNode, k int) *ListNode {
	if k <= 1 {
		return head
	}
	count := 1
	node := head
	first := head
	set := false
	for node != nil {
		if count == k {
			next_first := node.Next
			if set == false {
				reverseKGroupFunc(first, node)
				head = node
				set = true
				first.Next = next_first
			} else {
				temp := first.Next
				reverseKGroupFunc(first.Next, node)
				first.Next = node
				temp.Next = next_first
				first = temp
			}
			node = next_first
			count = 1
		} else {
			count++
			node = node.Next
		}
	}

	return head
}
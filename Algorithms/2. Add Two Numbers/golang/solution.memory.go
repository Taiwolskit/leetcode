/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	res2 := l1
	for {
		if l2 == nil {
			break
		}
		if l1 == nil {
			l1 = l2
			break
		}
		l1.Val += l2.Val
		l2 = l2.Next
		if l1.Next == nil {
			l1.Next = l2
			break
		}
		l1 = l1.Next
	}

	l1 = res2
	for {
		if l1 == nil {
			break
		}
		if l1.Val >= 10 {
			if l1.Next == nil {
				l1.Next = &ListNode{}
			}
			l1.Next.Val += l1.Val / 10
			l1.Val = l1.Val % 10
		}
		l1 = l1.Next
	}
	return res2
}

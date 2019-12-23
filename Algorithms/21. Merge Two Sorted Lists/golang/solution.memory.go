/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
	l1c := l1
	l2c := l2

	var cur, head *ListNode

	if l1c != nil && l2c != nil {
		if l1c.Val < l2c.Val {
			head = l1c
			cur = l1c
			l1c = l1c.Next
		} else {
			head = l2c
			cur = l2c
			l2c = l2c.Next
		}
	} else if l1c != nil {
		return l1
	} else if l2c != nil {
		return l2
	}

	for l1c != nil || l2c != nil {
		if l1c == nil {
			cur.Next = l2c
			break
		}
		if l2c == nil {
			cur.Next = l1c
			break
		}

		if l1c.Val < l2c.Val {
			cur.Next = l1c
			cur = cur.Next
			l1c = l1c.Next
		} else {
			cur.Next = l2c
			cur = cur.Next
			l2c = l2c.Next
		}
	}

	return head
}
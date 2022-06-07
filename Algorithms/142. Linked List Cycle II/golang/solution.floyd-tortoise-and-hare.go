/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func detectCycle(head *ListNode) *ListNode {
	if head == nil {
		return nil
	}
	intersect := getIntersect(head)
	if intersect == nil {
		return nil
	}

	ptr1 := head
	ptr2 := intersect
	for ptr1 != ptr2 {
		ptr1 = ptr1.Next
		ptr2 = ptr2.Next
	}
	return ptr1
}

func getIntersect(head *ListNode) *ListNode {
	tortoise := head
	hare := head

	for hare != nil && hare.Next != nil {
		tortoise = tortoise.Next
		hare = hare.Next.Next

		if hare == tortoise {
			return tortoise
		}
	}
	return nil
}

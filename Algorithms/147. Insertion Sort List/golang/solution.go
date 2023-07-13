/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func insertionSortList(head *ListNode) *ListNode {
	dummyHead := &ListNode{}
	curr := head

	for curr != nil {
		// prev is a pointer to where we'll insert curr
		prev := dummyHead

		// find the position to insert the current node
		for prev.Next != nil && prev.Next.Val < curr.Val {
			prev = prev.Next
		}

		// save curr's next node
		nextNode := curr.Next

		// insert curr node into the sorted part
		curr.Next = prev.Next
		prev.Next = curr

		// move curr to the next node to be inserted
		curr = nextNode
	}

	// return the sorted list, excluding the dummy head
	return dummyHead.Next
}

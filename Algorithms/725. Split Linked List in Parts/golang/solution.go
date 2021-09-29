/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func splitListToParts(head *ListNode, k int) []*ListNode {
	len := 0
	for cur := head; cur != nil; cur = cur.Next {
		len++
	}

	width, remainder := len/k, len%k

	ans := make([]*ListNode, k)
	cur := head
	for i := 0; i < k && cur != nil; i++ {
		ans[i] = cur
		var rc int
		if remainder > 0 {
			rc = 1
		}

		for j := 1; j < width+rc; j++ {
			cur = cur.Next
		}

		remainder--
		t := cur.Next
		cur.Next = nil
		cur = t
	}

	return ans
}

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseKGroup(head *ListNode, k int) *ListNode {
	if head == nil || k == 0 {
		return head
	}
	current := head
	var prevtail *ListNode
	var result *ListNode

	for current != nil {
		first, second, count := getNextChunk(current, k)

		var nHead *ListNode
		var nTail *ListNode

		if count < k {
			nHead = first
			nTail = nil
		} else {
			nHead, nTail = reverse(first)
		}

		if result == nil {
			result = nHead
			prevtail = nTail
		} else {
			if prevtail == nil {
				prevtail = nTail
			} else {
				prevtail.Next = nHead
				prevtail = nTail
			}
		}
		current = second
	}

	return result
}

func getNextChunk(x *ListNode, k int) (head, nextHead *ListNode, counter int) {

	counter = 0
	current := x

	for current != nil {
		counter++
		if counter == k {
			nextHead = current.Next
			current.Next = nil
			return x, nextHead, counter
		}
		current = current.Next
	}
	return x, nil, counter
}

func reverse(x *ListNode) (head, tail *ListNode) {
	if x == nil {
		return nil, nil
	}

	tail = x
	current := x
	var prev *ListNode

	for current != nil {
		tnext := current.Next
		current.Next = prev
		prev = current
		current = tnext
	}

	head = prev
	return head, tail
}
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func isPalindrome(head *ListNode) bool {
	if head == nil {
		return true
	}

	var (
		firstHalfEnd    *ListNode = endOfFirstHalf(head)
		secondHalfStart *ListNode = reverseList(firstHalfEnd.Next)
	)

	var (
		result         bool      = true
		firstPosition  *ListNode = head
		secondPosition *ListNode = secondHalfStart
	)
	for result && secondPosition != nil {
		if firstPosition.Val != secondPosition.Val {
			result = false
		}
		firstPosition = firstPosition.Next
		secondPosition = secondPosition.Next
	}
	firstHalfEnd.Next = reverseList(secondHalfStart)
	return result
}

func endOfFirstHalf(head *ListNode) *ListNode {
	var (
		slow *ListNode = head
		fast *ListNode = head
	)
	for fast.Next != nil && fast.Next.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}
	return slow
}

func reverseList(head *ListNode) *ListNode {
	var (
		current  *ListNode = head
		previous *ListNode = nil
	)
	for current != nil {
		nextNode := current.Next
		current.Next = previous
		previous = current
		current = nextNode
	}
	return previous
}
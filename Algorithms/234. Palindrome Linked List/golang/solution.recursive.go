/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
var frontPointer *ListNode

func isPalindrome(head *ListNode) bool {
	frontPointer = head
	return recursivelyCheck(head)
}

func recursivelyCheck(currentNode *ListNode) bool {
	if currentNode == nil {
		return true
	}
	if !recursivelyCheck(currentNode.Next) {
		return false
	}
	if frontPointer.Val != currentNode.Val {
		return false
	}
	frontPointer = frontPointer.Next
	return true
}
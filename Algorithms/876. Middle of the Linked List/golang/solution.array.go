/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func middleNode(head *ListNode) *ListNode {
	var arr []*ListNode = make([]*ListNode, 0)
	arr = append(arr, head)
	for head.Next != nil {
		head = head.Next
		arr = append(arr, head)
	}
	return arr[len(arr)/2]
}
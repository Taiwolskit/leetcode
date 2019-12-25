/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeKLists(lists []*ListNode) *ListNode {
	var output *ListNode
	var cur *ListNode
	first := true
	var min int

	for i := 0; i < len(lists); i++ {
		if lists[i] == nil && i != len(lists)-1 {
			continue
		}
		if lists[i] != nil && first {
			min = i
			first = false
		}
		if !first && lists[i] != nil && lists[i].Val < lists[min].Val {
			min = i
		}

		if i == len(lists)-1 {
			if first {
				break
			}

			i = -1
			first = true
			if output == nil {
				output = lists[min]
				lists[min] = lists[min].Next
				cur = output
			} else {
				cur.Next = lists[min]
				lists[min] = lists[min].Next
				cur = cur.Next
			}
		}
	}
	return output
}
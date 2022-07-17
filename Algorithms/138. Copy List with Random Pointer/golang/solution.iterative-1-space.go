/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Next *Node
 *     Random *Node
 * }
 */

func copyRandomList(head *Node) *Node {
	if head == nil {
		return nil
	}

	var ptr *Node = head
	for ptr != nil {
		var newNode *Node = &Node{Val: ptr.Val}
		newNode.Next = ptr.Next
		ptr.Next = newNode
		ptr = newNode.Next
	}

	ptr = head
	for ptr != nil {
		if ptr.Random != nil {
			ptr.Next.Random = ptr.Random.Next
		} else {
			ptr.Next.Random = nil
		}
		ptr = ptr.Next.Next
	}

	var (
		ptrOldList *Node = head
		ptrNewList *Node = head.Next
		headNew    *Node = head.Next
	)
	for ptrOldList != nil {
		ptrOldList.Next = ptrOldList.Next.Next
		if ptrNewList.Next != nil {
			ptrNewList.Next = ptrNewList.Next.Next
		}
		ptrOldList = ptrOldList.Next
		ptrNewList = ptrNewList.Next
	}
	return headNew
}
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Next *Node
 * }
 */

func insert(aNode *Node, x int) *Node {
	if aNode == nil {
		newNode := Node{x, nil}
		newNode.Next = &newNode
		return &newNode
	}

	var prev, curr *Node = aNode, aNode.Next
	for curr != aNode {
		if prev.Val <= x && x <= curr.Val {
			break
		}
		if prev.Val > curr.Val {
			if x >= prev.Val || x <= curr.Val {
				break
			}
		}
		prev, curr = curr, curr.Next
	}

	prev.Next = &Node{x, curr}
	return aNode
}
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Next *Node
 *     Random *Node
 * }
 */

var visited map[*Node]*Node = map[*Node]*Node{}

func copyRandomList(head *Node) *Node {
	if head == nil {
		return nil
	}

	if node, ok := visited[head]; ok {
		return node
	}

	node := &Node{Val: head.Val}
	visited[head] = node

	node.Next = copyRandomList(head.Next)
	node.Random = copyRandomList(head.Random)
	return node
}
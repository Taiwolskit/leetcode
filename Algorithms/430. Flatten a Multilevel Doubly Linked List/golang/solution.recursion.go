/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Prev *Node
 *     Next *Node
 *     Child *Node
 * }
 */

func flatten(root *Node) *Node {
	if root == nil {
		return nil
	}

	var pseudoHead *Node = &Node{
		Next: root,
	}
	flattenDfs(pseudoHead, root)
	pseudoHead.Next.Prev = nil
	return pseudoHead.Next
}

func flattenDfs(prev *Node, curr *Node) *Node {
	if curr == nil {
		return prev
	}

	curr.Prev = prev
	prev.Next = curr

	var tempNext *Node = curr.Next
	var tail *Node = flattenDfs(curr, curr.Child)
	curr.Child = nil
	return flattenDfs(tail, tempNext)
}
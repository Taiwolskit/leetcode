/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Next *Node
 *     Random *Node
 * }
 */

func copyRandomList(head *Node) *Node {
	visited := make(map[*Node]*Node)
	for node := head; node != nil; node = node.Next {
		visited[node] = &Node{Val: node.Val}
	}
	for node := head; node != nil; node = node.Next {
		cur := visited[node]
		cur.Next, cur.Random = visited[node.Next], visited[node.Random]
	}
	return visited[head]
}
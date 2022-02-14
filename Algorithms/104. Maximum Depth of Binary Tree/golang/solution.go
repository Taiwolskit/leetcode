/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
type NodeWDepth struct {
	node  *TreeNode
	depth int
}

type Stack []NodeWDepth

func (s Stack) Push(n NodeWDepth) Stack  { return append(s, n) }
func (s Stack) Pop() (Stack, NodeWDepth) { return s[:len(s)-1], s[len(s)-1] }
func (s Stack) NotEmpty() bool           { return len(s) > 0 }

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func maxDepth(root *TreeNode) int {
	s := make(Stack, 0)
	depth := 0
	var cur NodeWDepth
	s = s.Push(NodeWDepth{root, 0})

	for s.NotEmpty() {
		s, cur = s.Pop()

		if cur.node != nil {
			depth = max(depth, cur.depth+1)
			s = s.Push(NodeWDepth{cur.node.Right, cur.depth + 1})
			s = s.Push(NodeWDepth{cur.node.Left, cur.depth + 1})
		}
	}

	return depth
}

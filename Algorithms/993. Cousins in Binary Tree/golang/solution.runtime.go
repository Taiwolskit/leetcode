/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isCousins(root *TreeNode, x int, y int) bool {
	d := make(map[int]int)
	p := make(map[int]int)
	var worker func(node *TreeNode, parent int, level int)
	worker = func(node *TreeNode, parent int, level int) {
		if node == nil {
			return
		}
		d[node.Val] = level
		p[node.Val] = parent
		worker(node.Left, node.Val, level+1)
		worker(node.Right, node.Val, level+1)
	}
	worker(root, root.Val, 0)
	return (d[x] == d[y]) && (p[x] != p[y])
}

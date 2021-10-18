/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isCousins(root *TreeNode, x int, y int) bool {
	if root.Val == x || root.Val == y {
		return false
	}

	var depthFn func(*TreeNode, int, int) (*TreeNode, int)
	depthFn = func(r *TreeNode, val int, rDepth int) (*TreeNode, int) {
		if r == nil || (r.Left == nil && r.Right == nil) {
			return nil, -1
		}

		if r.Left != nil && r.Left.Val == val {
			return r, rDepth + 1
		}

		if r.Right != nil && r.Right.Val == val {
			return r, rDepth + 1
		}

		parent, depth := depthFn(r.Left, val, rDepth+1)
		if parent != nil {
			return parent, depth
		}

		return depthFn(r.Right, val, rDepth+1)
	}

	xParent, xDepth := depthFn(root, x, 0)
	yParent, yDepth := depthFn(root, y, 0)

	return xDepth == yDepth && xParent != yParent
}

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func insertIntoBST(root *TreeNode, val int) *TreeNode {
	node := root
	for node != nil {
		if val > node.Val {
			if node.Right == nil {
				node.Right = &TreeNode{Val: val}
				return root
			} else {
				node = node.Right
			}
		} else {
			if node.Left == nil {
				node.Left = &TreeNode{Val: val}
				return root
			} else {
				node = node.Left
			}
		}
	}

	return &TreeNode{Val: val}
}

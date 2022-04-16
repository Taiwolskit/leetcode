/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func convertBST(root *TreeNode) *TreeNode {
	total := 0
	var convert func(*TreeNode)
	convert = func(node *TreeNode) {
		if node != nil {
			convert(node.Right)
			total += node.Val
			node.Val = total
			convert(node.Left)
		}
	}
	convert(root)
	return root
}

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
	node := root
	stack := make([]*TreeNode, 0)
	for node != nil || len(stack) > 0 {
		for node != nil {
			stack = append(stack, node)
			node = node.Right
		}

		node = stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		total += node.Val
		node.Val = total
		node = node.Left
	}
	return root
}

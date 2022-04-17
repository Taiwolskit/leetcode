/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func increasingBST(root *TreeNode) *TreeNode {
	vals := make([]int, 0)
	inorder(root, &vals)
	ans := &TreeNode{}
	cur := ans
	for _, v := range vals {
		cur.Right = &TreeNode{Val: v}
		cur = cur.Right
	}
	return ans.Right
}

func inorder(root *TreeNode, vals *[]int) {
	if root == nil {
		return
	}
	inorder(root.Left, vals)
	*vals = append(*vals, root.Val)
	inorder(root.Right, vals)
}

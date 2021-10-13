/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func bstFromPreorder(preorder []int) *TreeNode {
	if preorder == nil {
		return nil
	}
	node := &TreeNode{preorder[0], nil, nil}
	for i := 1; i < len(preorder); i++ {
		helper(node, preorder[i])
	}
	return node
}

func helper(node *TreeNode, val int) *TreeNode {
	if node == nil {
		node = &TreeNode{val, nil, nil}
		return node
	}
	if val < node.Val {
		node.Left = helper(node.Left, val)
	} else {
		node.Right = helper(node.Right, val)
	}
	return node
}

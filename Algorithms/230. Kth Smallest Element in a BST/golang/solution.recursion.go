/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func kthSmallest(root *TreeNode, k int) int {
	cur := 0
	val := 0
	dfs(root, k, &cur, &val)
	return val

}

func dfs(node *TreeNode, k int, cur, val *int) {
	if node == nil {
		return
	}
	dfs(node.Left, k, cur, val)

	*cur = *cur + 1
	if *cur == k {
		*val = node.Val
	}
	dfs(node.Right, k, cur, val)
}

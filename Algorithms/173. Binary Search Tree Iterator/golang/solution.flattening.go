/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
type BSTIterator struct {
	index       int
	nodesSorted []int
}

func Constructor(root *TreeNode) BSTIterator {
	var data []int
	var inorder func(node *TreeNode)
	inorder = func(node *TreeNode) {
		if node == nil {
			return
		}
		inorder(node.Left)
		data = append(data, node.Val)
		inorder(node.Right)
	}
	inorder(root)
	return BSTIterator{
		index:       0,
		nodesSorted: data,
	}
}

func (this *BSTIterator) Next() int {
	this.index += 1
	return this.nodesSorted[this.index-1]
}

func (this *BSTIterator) HasNext() bool {
	return this.index < len(this.nodesSorted)
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * obj := Constructor(root);
 * param_1 := obj.Next();
 * param_2 := obj.HasNext();
 */

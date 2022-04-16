func getSuccessor(node *TreeNode) *TreeNode {
	succ := node.Right
	for succ.Left != nil && succ.Left != node {
		succ = succ.Left
	}
	return succ
}

func convertBST(root *TreeNode) *TreeNode {
	total := 0
	node := root
	for node != nil {
		if node.Right == nil {
			total += node.Val
			node.Val = total
			node = node.Left
		} else {
			succ := getSuccessor(node)
			if succ.Left == nil {
				succ.Left = node
				node = node.Right
			} else {
				succ.Left = nil
				total += node.Val
				node.Val = total
				node = node.Left
			}
		}
	}
	return root
}

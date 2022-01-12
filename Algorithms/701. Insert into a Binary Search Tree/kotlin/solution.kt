/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun insertIntoBST(root: TreeNode?, `val`: Int): TreeNode? {
        var node = root
        while (node != null) {
            if (`val` < node.`val`) {
                if (node.left == null) {
                    node.left = TreeNode(`val`)
                    return root
                }
                node = node.left
            } else {
                if (node.right == null) {
                    node.right = TreeNode(`val`)
                    return root
                }
                node = node.right
            }
        }

        return TreeNode(`val`)
    }
}

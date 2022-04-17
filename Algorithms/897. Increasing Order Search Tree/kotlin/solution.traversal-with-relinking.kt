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
    private var cur: TreeNode = TreeNode(0)

    fun increasingBST(root: TreeNode?): TreeNode? {
        var ans: TreeNode = cur
        inorder(root)
        return ans.right
    }

    fun inorder(node: TreeNode?) {
        if (node == null) {
            return
        }

        inorder(node.left)
        node.left = null
        cur.right = node
        cur = cur.right
        inorder(node.right)
    }
}

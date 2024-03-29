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
    fun trimBST(root: TreeNode?, low: Int, high: Int): TreeNode? {
        return if (root == null) {
            null
        } else if (root.`val` < low) {
            trimBST(root.right, low, high)
        } else if (root.`val` > high) {
            trimBST(root.left, low, high)
        } else {
            root.left = trimBST(root.left, low, high)
            root.right = trimBST(root.right, low, high)
            root
        }
    }
}

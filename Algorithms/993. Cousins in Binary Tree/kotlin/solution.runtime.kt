/**
 * Example: var ti = TreeNode(5) var v = ti.`val` Definition for a binary tree node. class
 * TreeNode(var `val`: Int) {
 * ```
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * ```
 * }
 */
class Solution {

    var xl = 0
    var xp = 0

    var yl = 0
    var yp = 0

    fun isCousins(root: TreeNode?, x: Int, y: Int): Boolean {
        rec(root, x, y, 0, null)

        return xl == yl && xp != yp
    }

    fun rec(root: TreeNode?, x: Int, y: Int, level: Int, parent: TreeNode?) {
        if (root == null) return

        val curr = root.`val`
        if (curr == x) {
            xl = level
            xp = parent?.`val` ?: 0
        } else if (curr == y) {
            yl = level
            yp = parent?.`val` ?: 0
        }

        rec(root.left, x, y, level + 1, root)
        rec(root.right, x, y, level + 1, root)
    }
}

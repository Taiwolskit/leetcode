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
    fun increasingBST(node: TreeNode?): TreeNode? {
        val vals = mutableListOf<Int>()
        inorder(node, vals)

        val ans = TreeNode(0)
        var cur = ans
        for (v in vals) {
            cur.right = TreeNode(v)
            cur = cur.right
        }
        return ans.right
    }

    private fun inorder(node: TreeNode?, vals: MutableList<Int>) {
        if (node == null) return
        inorder(node.left, vals)
        vals.add(node.`val`)
        inorder(node.right, vals)
    }
}

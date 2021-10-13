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
    fun bstFromPreorder(preorder: IntArray, left: Int, right: Int): TreeNode? {
        if (left > right) {
            return null
        }

        var center = left

        (left + 1..right).forEach {
            if (preorder[it] < preorder[left]) {
                center = it
            }
        }

        return TreeNode(preorder[left]).also {
            it.left = bstFromPreorder(preorder, left + 1, center)
            it.right = bstFromPreorder(preorder, center + 1, right)
        }
    }

    fun bstFromPreorder(preorder: IntArray): TreeNode? {
        return bstFromPreorder(preorder, 0, preorder.size - 1)
    }
}

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
    fun searchBST(root: TreeNode?, `val`: Int): TreeNode? {
        var cur = root

        while (cur != null && cur.`val` != `val`) {
            if (cur.`val` > `val`) {
                cur = cur.left
            } else {
                cur = cur.right
            }
        }
        return cur
    }
}

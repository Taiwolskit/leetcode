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
    fun maxDepth(root: TreeNode?): Int {
        val linkedList = LinkedList<TreeNode?>()
        var count = 0
        linkedList.add(root)

        while (linkedList.isNotEmpty()) {
            for (i in 0 until linkedList.size) {
                val node = linkedList.poll() ?: continue
                linkedList.add(node.left)
                linkedList.add(node.right)
            }
            count++
        }
        return count - 1
    }
}

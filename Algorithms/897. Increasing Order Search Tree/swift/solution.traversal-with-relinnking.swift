/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */
class Solution {
    var cur: TreeNode?

    func increasingBST(_ root: TreeNode?) -> TreeNode? {
        var ans = TreeNode(0)
        cur = ans
        inorder(root)
        return ans.right
    }

    func inorder(_ node: TreeNode?) {
        guard var node = node else { return }

        inorder(node.left)
        node.left = nil
        cur?.right = node
        cur = node
        inorder(node.right)
    }
}

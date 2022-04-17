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
    func increasingBST(_ root: TreeNode?) -> TreeNode? {
        var vals: [Int] = []

        inorder(root, &vals)
        var ans = TreeNode(0)
        var cur: TreeNode? = ans
        for v in vals {
            cur?.right = TreeNode(v)
            cur = cur?.right
        }
        return ans.right
    }

    func inorder (_ node: TreeNode?, _ vals: inout [Int]) {
        guard let node = node else { return }
        inorder(node.left, &vals)
        vals.append(node.val)
        inorder(node.right, &vals)
    }
}

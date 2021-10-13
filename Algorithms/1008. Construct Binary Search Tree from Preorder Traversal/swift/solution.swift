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
    func bstFromPreorder(_ preorder: [Int]) -> TreeNode? {
        if preorder.count == 0 { return nil }

        var left: [Int] = []
        var right: [Int] = []
        for (index, item) in preorder.enumerated() {
            if index == 0 { continue }
            if item > preorder[0] {
                right.append(item)
            } else {
                left.append(item)
            }
        }

        var leftNode = bstFromPreorder(left)
        var rightNode = bstFromPreorder(right)
        return TreeNode(preorder[0], leftNode, rightNode)
    }
}

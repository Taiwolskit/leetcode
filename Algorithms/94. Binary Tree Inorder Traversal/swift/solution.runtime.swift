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
    func inorderTraversal(_ root: TreeNode?) -> [Int] {
        var result: [Int] = []
        traversal(root, &result)

        return result
    }

    func traversal(_ root: TreeNode?, _ result: inout [Int]) {
        guard let root = root else { return }

        if let left = root.left {
            traversal(left, &result)
        }

        result.append(root.val)

        if let right = root.right {
            traversal(right, &result)
        }
    }
}

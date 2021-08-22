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
        recursiveInorderTraversal(root, result: &result)
        return result
    }

    func recursiveInorderTraversal(_ root: TreeNode?, result: inout [Int]) {
        guard let castedRoot = root else { return }

        recursiveInorderTraversal(castedRoot.left, result: &result)
        result.append(castedRoot.val)
        recursiveInorderTraversal(castedRoot.right, result: &result)
    }
}

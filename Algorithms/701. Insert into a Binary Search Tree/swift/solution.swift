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
    func insertIntoBST(_ root: TreeNode?, _ val: Int) -> TreeNode? {
        guard var node = root else {
            return TreeNode(val, nil, nil)
        }
        while true {
            if node.val > val {
                if let leftNode = node.left {
                    node = leftNode
                } else {
                    node.left = TreeNode(val)
                    return root
                }
            } else {
                if let rightNode = node.right {
                    node = rightNode
                } else {
                    node.right = TreeNode(val)
                    return root
                }
            }
        }
    }
}

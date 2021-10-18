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
    func isCousins(_ root: TreeNode?, _ x: Int, _ y: Int) -> Bool {
        let pathX = findPathToNode(root, [], x)!
        let pathY = findPathToNode(root, [], y)!
        return pathX.count == pathY.count && pathX[pathX.count - 2] != pathY[pathY.count - 2]
    }

    func findPathToNode(_ root: TreeNode?, _ path: [Int], _ key: Int) -> [Int]? {
        if root == nil {
            return nil
        }
        let base = path + [root!.val]
        if root!.val == key {
            return base
        }
        if let leftPath = findPathToNode(root!.left, base, key) {
            return leftPath
        }
        if let rightPath = findPathToNode(root!.right, base, key) {
            return rightPath
        }
        return nil
    }
}

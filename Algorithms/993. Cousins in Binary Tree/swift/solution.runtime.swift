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
        guard var node = root else { return false }
        var childToParent = [Int: Int]()
        var currentLevel = [node]
        while !currentLevel.isEmpty {
            let currentLevelVals = Set(currentLevel.map({ $0.val }))
            if currentLevelVals.contains(x) && currentLevelVals.contains(y)
                && childToParent[x] != childToParent[y] {
                return true
            }

            var nextLevel = [TreeNode]()
            for node in currentLevel {
                if let left = node.left {
                    childToParent[left.val] = node.val
                    nextLevel.append(left)
                }
                if let right = node.right {
                    childToParent[right.val] = node.val
                    nextLevel.append(right)
                }
            }
            currentLevel = nextLevel
        }
        return false
    }
}

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
    func maxDepth(_ root: TreeNode?) -> Int {
        if root == nil { return 0 }
        var queue = [TreeNode]()
        var depth = 1
        if let left = root!.left { queue.append(left) }
        if let right = root!.right { queue.append(right) }

        while !queue.isEmpty {
            var count = queue.count
            var next = [TreeNode]()
            for i in 0..<count {
                var current = queue[i]
                if let left = current.left { next.append(left) }
                if let right = current.right { next.append(right) }
            }
            queue = next
            depth += 1
        }

        return depth
    }
}

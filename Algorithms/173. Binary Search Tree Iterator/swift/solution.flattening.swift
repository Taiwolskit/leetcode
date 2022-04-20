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

class BSTIterator {

    var nodeSorted = [Int]()
    var index = -1

    init(_ root: TreeNode?) {
        inorder(root)
    }

    func inorder(_ node: TreeNode?) {
        guard let node = node else {
            return
        }

        inorder(node.left)
        nodeSorted.append(node.val)
        inorder(node.right)
    }

    func next() -> Int {
        index += 1
        return nodeSorted[index]
    }

    func hasNext() -> Bool {
        return index + 1 < nodeSorted.count
    }
}


/**
 * Your BSTIterator object will be instantiated and called as such:
 * let obj = BSTIterator(root)
 * let ret_1: Int = obj.next()
 * let ret_2: Bool = obj.hasNext()
 */

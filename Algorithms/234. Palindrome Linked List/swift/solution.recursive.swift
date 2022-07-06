/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init() { self.val = 0; self.next = nil; }
 *     public init(_ val: Int) { self.val = val; self.next = nil; }
 *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
 * }
 */
class Solution {
    private var frontPointer: ListNode?

    func isPalindrome(_ head: ListNode?) -> Bool {
        self.frontPointer = head

        func recursivelyCheck(_ currentNode: ListNode? = head) -> Bool {
            if currentNode != nil {
                if !recursivelyCheck(currentNode?.next) {
                    return false
                }
                if  self.frontPointer!.val != currentNode!.val {
                    return false
                }
                self.frontPointer = self.frontPointer?.next
            }
            return true
        }

        return recursivelyCheck()
    }
}

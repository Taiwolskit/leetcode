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
    func middleNode(_ head: ListNode?) -> ListNode? {
        var current: ListNode? = head
        var arr: [ListNode?] = [ListNode]()
        while current != nil {
            arr.append(current!)
            current = current?.next
        }
        return arr[arr.count / 2]
    }
}

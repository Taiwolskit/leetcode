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
    func mergeTwoLists(_ list1: ListNode?, _ list2: ListNode?) -> ListNode? {
        guard list1 != nil else {
            return list2
        }
        guard list2 != nil else {
            return list1
        }

        var result: ListNode? = nil
        if list1!.val < list2!.val {
            result = list1
            result!.next = mergeTwoLists(list1!.next, list2)
        } else {
            result = list2
            result!.next = mergeTwoLists(list1, list2!.next)
        }
        return result
    }
}
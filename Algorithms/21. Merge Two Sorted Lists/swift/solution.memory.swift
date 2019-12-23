/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.next = nil
 *     }
 * }
 */
class Solution {
  func mergeTwoLists(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {

    var merged: ListNode? = ListNode(0)
    var mergedHead = merged

    var list1 = l1
    var list2 = l2

    while list1 != nil && list2 != nil {
      if list1!.val < list2!.val {
        merged?.next = list1
        list1 = list1?.next
      } else {
        merged?.next = list2
        list2 = list2?.next
      }

      merged = merged?.next
    }

    merged?.next = (list1 == nil) ? list2 : list1

    return mergedHead?.next
  }
}
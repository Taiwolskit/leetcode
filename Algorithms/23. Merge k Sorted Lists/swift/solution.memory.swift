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
  func mergeKLists(_ lists: [ListNode?]) -> ListNode? {
    if lists.isEmpty {
      return nil
    }

    var mergedLists = lists

    while mergedLists.count != 1 {
      var updatedMergedLists = [ListNode?]()
      var i = 0

      while i < mergedLists.count {
        if i == mergedLists.count - 1 {
          updatedMergedLists.append(mergedLists[i])
          break
        }

        let first = mergedLists[i]
        let second = mergedLists[i + 1]
        let merged = mergeTwoLists(first, second)
        updatedMergedLists.append(merged)
        i += 2
      }

      mergedLists = updatedMergedLists
    }

    return mergedLists.first!
  }

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
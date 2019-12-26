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
  func swapPairs(_ head: ListNode?) -> ListNode? {
    var arr = [ListNode]()
    var node = head
    while node != nil {
      arr.append(ListNode(node!.val))
      node = node?.next
    }

    for i in stride(from: 0, to: arr.count - 1, by: 2) {
      arr[i + 1].next = arr[i]
      if i - 2 >= 0 {
        arr[i - 2].next = arr[i + 1]
      }
    }

    guard arr.count > 1 else {
      return arr.count > 0 ? arr[0] : nil
    }
    if arr.count % 2 != 0 {
      arr[arr.count - 3].next = arr[arr.count - 1]
    }
    return arr[1]
  }
}
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
    func splitListToParts(_ head: ListNode?, _ k: Int) -> [ListNode?] {
        var ret = [ListNode?]()
        var N = 0
        var node = head
        while node != nil {
            node = node!.next
            N += 1
        }

        var r = N % k, q = N / k

        var cur = head
        for i in 0..<k {
            ret.append(cur)
            var size = q + (i < r ? 1 : 0)
            var j = 1
            while j < size {
                cur = cur?.next
                j += 1
            }
            let next = cur?.next
            cur?.next = nil
            cur = next
        }

        return ret
    }
}

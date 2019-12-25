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
    func append(_ l: ListNode?, _ values: inout [Int]) {
        var node = l
        while node != nil {
            values.append(node!.val)
            node = node!.next
        }
    }

    func mergeKLists(_ lists: [ListNode?]) -> ListNode? {
        if lists.count == 0 { return nil }
        if lists.count == 1 { return lists[0] }
        var values = [Int]()
        for l in lists {
            append(l, &values)   
        }
        values.sort(by:<)
        var head: ListNode?
        if values.count == 0 { return head }
        var next = ListNode(values[0])
        head = next
        if 1 > values.count-1 { return head }
        for idx in (1...values.count-1) {
            let n = ListNode(values[idx])
            next.next = n
            next = n
        }
        return head
    }
}
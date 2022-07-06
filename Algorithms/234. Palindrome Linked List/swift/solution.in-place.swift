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
    func isPalindrome(_ head: ListNode?) -> Bool {
        guard head != nil else {
            return true
        }

        var firstHalfEnd: ListNode? = self.endOfFirstHalf(head)
        var secondHalfStart: ListNode? = self.reverse(firstHalfEnd?.next)

        var result: Bool = true
        var firstPosition: ListNode? = head
        var secondPosition: ListNode? = secondHalfStart
        while result && secondPosition != nil {
            if firstPosition!.val != secondPosition!.val {
                result = false
            }
            firstPosition = firstPosition?.next
            secondPosition = secondPosition?.next
        }

        firstHalfEnd?.next = self.reverse(secondHalfStart)
        return result
    }

    func endOfFirstHalf(_ head: ListNode?) -> ListNode? {
        var slow = head
        var fast = head
        while fast?.next != nil && fast?.next?.next != nil {
            slow = slow?.next
            fast = fast?.next?.next
        }
        return slow
    }

    func reverse(_ head: ListNode?) -> ListNode? {
        var previous: ListNode? = nil
        var current: ListNode? = head
        while current != nil {
            let nextNode = current?.next
            current?.next = previous
            previous = current
            current = nextNode
        }
        return previous
    }
}

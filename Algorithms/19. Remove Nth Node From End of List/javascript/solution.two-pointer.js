/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    const dummy = new ListNode(0, head);
    let length = 0,
        first = head;
    while (first) {
        length++;
        first = first.next;
    }

    first = dummy;
    for (let i = length - n; i > 0; i--) {
        first = first.next;
    }

    first.next = first.next.next;
    return dummy.next;
};

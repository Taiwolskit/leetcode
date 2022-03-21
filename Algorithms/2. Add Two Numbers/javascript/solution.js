/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const head = new ListNode(0);
    let p = l1,
        q = l2,
        curr = head,
        carry = 0;

    while (p || q || carry) {
        const x = p ? p.val : 0;
        const y = q ? q.val : 0;
        const sum = x + y + carry;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        p = p ? p.next : null;
        q = q ? q.next : null;
    }

    return head.next;
};

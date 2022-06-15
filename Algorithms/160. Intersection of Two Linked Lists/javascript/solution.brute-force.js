/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    while (headA) {
        let pB = headB;
        while (pB) {
            if (headA === pB) {
                return headA;
            }
            pB = pB.next;
        }
        headA = headA.next;
    }
    return null;
};

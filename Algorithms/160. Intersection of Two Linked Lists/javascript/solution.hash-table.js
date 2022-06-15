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
    const nodesInB = new Set();

    while (headB) {
        nodesInB.add(headB);
        headB = headB.next;
    }
    while (headA) {
        if (nodesInB.has(headA)) {
            return headA;
        }
        headA = headA.next;
    }
    return null;
};

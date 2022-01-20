/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (head === null) return null;
    let intersection = getIntersection(head);
    if (intersection === null) return null;
    let ptr1 = head,
        ptr2 = intersection;
    while (ptr1 !== ptr2) {
        ptr2 = ptr2.next;
        ptr1 = ptr1.next;
    }
    return ptr1;
};

const getIntersection = (head) => {
    let tortoise = head,
        hare = head;

    while (hare !== null && hare.next !== null) {
        tortoise = tortoise.next;
        hare = hare.next.next;

        if (tortoise === hare) return tortoise;
    }
    return null;
};

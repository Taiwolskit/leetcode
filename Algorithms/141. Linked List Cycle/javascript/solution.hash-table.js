/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    const nodesSeen = new Set();
    while (head) {
        if (nodesSeen.has(head)) {
            return true;
        }
        nodesSeen.add(head);
        head = head.next;
    }
    return false;
};

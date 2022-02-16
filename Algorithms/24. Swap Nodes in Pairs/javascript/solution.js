/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    const dummy = new ListNode(-1, head);
    let prevNode = dummy;

    while (head && head.next) {
        let firstNode = head;
        let secondNode = head.next;

        prevNode.next = secondNode;
        firstNode.next = secondNode.next;
        secondNode.next = firstNode;

        prevNode = firstNode;
        head = firstNode.next;
    }
    return dummy.next;
};

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
var insertionSortList = function (head) {
    let dummyHead = new ListNode();
    let curr = head;

    while (curr != null) {
        let prev = dummyHead;

        while (prev.next != null && prev.next.val < curr.val) {
            prev = prev.next;
        }

        let nextNode = curr.next;
        curr.next = prev.next;
        prev.next = curr;
        curr = nextNode;
    }

    return dummyHead.next;
};

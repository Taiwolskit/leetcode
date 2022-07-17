/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

var copyRandomList = function (head) {
    if (!head) return head;

    let ptr = head;
    while (ptr) {
        let newNode = new Node(ptr.val);
        newNode.next = ptr.next;
        ptr.next = newNode;
        ptr = newNode.next;
    }

    ptr = head;
    while (ptr) {
        ptr.next.random = ptr.random ? ptr.random.next : null;
        ptr = ptr.next.next;
    }

    let ptrOldList = head,
        ptrNewList = head.next,
        headNew = head.next;
    while (ptrOldList) {
        ptrOldList.next = ptrOldList.next.next;
        ptrNewList.next = ptrNewList.next ? ptrNewList.next.next : null;
        ptrOldList = ptrOldList.next;
        ptrNewList = ptrNewList.next;
    }
    return headNew;
};

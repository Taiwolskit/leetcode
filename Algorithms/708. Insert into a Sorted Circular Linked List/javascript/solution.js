/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function (head, insertVal) {
    if (!head) {
        const newNode = new Node(insertVal, null);
        newNode.next = newNode;
        return newNode;
    }

    let prev = head,
        curr = head.next;
    while (curr != head) {
        if (prev.val <= insertVal && insertVal <= curr.val) {
            break;
        }
        if (prev.val > curr.val && (insertVal >= prev.val || insertVal <= curr.val)) {
            break;
        }
        [prev, curr] = [curr, curr.next];
    }

    prev.next = new Node(insertVal, curr);
    return head;
};

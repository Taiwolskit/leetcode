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

const visitedHash = new Map();

var copyRandomList = function (head) {
    if (!head) return null;
    if (visitedHash.has(head)) return visitedHash.get(head);
    const node = new Node(head.val);
    visitedHash.set(head, node);
    node.next = copyRandomList(head.next);
    node.random = copyRandomList(head.random);
    return node;
};

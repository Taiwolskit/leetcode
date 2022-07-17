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

const visited = new Map();

const getClonedNode = (node) => {
    if (!node) return null;
    if (visited.has(node)) return visited.get(node);
    const newNode = new Node(node.val);
    visited.set(node, newNode);
    return newNode;
};

var copyRandomList = function (head) {
    if (!head) return head;

    let oldNode = head,
        newNode = new Node(oldNode.val);
    visited.set(oldNode, newNode);

    while (oldNode) {
        newNode.random = getClonedNode(oldNode.random);
        newNode.next = getClonedNode(oldNode.next);
        oldNode = oldNode.next;
        newNode = newNode.next;
    }
    return visited.get(head);
};

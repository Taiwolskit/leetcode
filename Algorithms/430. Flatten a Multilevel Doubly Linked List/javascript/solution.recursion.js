/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    if (!head) {
        return;
    }

    const flattenDfs = (prev, curr) => {
        if (!curr) {
            return prev;
        }

        prev.next = curr;
        curr.prev = prev;

        let tempNext = curr.next;
        let tail = flattenDfs(curr, curr.child);
        curr.child = null;
        return flattenDfs(tail, tempNext);
    };

    let pseudoHead = new Node(0, null, head, null);
    flattenDfs(pseudoHead, head);
    pseudoHead.next.prev = null;
    return pseudoHead.next;
};

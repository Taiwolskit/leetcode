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

    let pseudoHead = new Node(0, null, head, null);
    let prev = pseudoHead;

    const stack = [head];
    while (stack.length > 0) {
        let curr = stack.pop();
        prev.next = curr;
        curr.prev = prev;

        if (curr.next) {
            stack.push(curr.next);
        }
        if (curr.child) {
            stack.push(curr.child);
            curr.child = null;
        }

        prev = curr;
    }

    pseudoHead.next.prev = null;
    return pseudoHead.next;
};

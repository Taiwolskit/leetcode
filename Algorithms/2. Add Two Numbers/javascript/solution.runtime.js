/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let node = null;
  let head = null;
  let i = 0;
  let inMemory = 0;
  while (l1 || l2) {
    const value = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + inMemory;
    const digit = value % 10;
    inMemory = value > 9 ? 1 : 0;
    const currentNode = { val: digit, next: null };

    if (i === 0) {
      node = currentNode;
      head = node;
    } else {
      node.next = currentNode;
      node = node.next;
    }
    i++;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  if (inMemory) {
    node.next = { val: 1, next: null };
  }
  return head;
};

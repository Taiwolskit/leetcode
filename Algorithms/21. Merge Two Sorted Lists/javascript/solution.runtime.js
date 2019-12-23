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
var mergeTwoLists = function(l1, l2) {
  let currentNode = {
    val: null,
    next: l1 && l2 ? (l1.val > l2.val ? l2 : l1) : l1 || l2
  };
  const rootNode = currentNode;

  while (currentNode) {
    if (l1) {
      if (l2 && l2.val <= l1.val) {
        currentNode.next = l2;
        currentNode = currentNode.next;
        l2 = l2.next;
      } else {
        currentNode.next = l1;
        currentNode = currentNode.next;
        l1 = l1.next;
      }
    } else {
      currentNode.next = l2;
      currentNode = currentNode.next;
      if (l2) l2 = l2.next;
    }
  }

  return rootNode.next;
};

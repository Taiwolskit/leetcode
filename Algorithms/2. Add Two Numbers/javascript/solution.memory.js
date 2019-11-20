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
  let l3 = null;
  let temp = 0;
  let currentNode = null;

  while (l1 !== null || l2 !== null || temp !== 0) {
    let sum = 0;

    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    sum += temp;
    if (sum > 9) {
      temp = 1;
      sum -= 10;
    } else {
      temp = 0;
    }

    if (l3 === null) {
      l3 = new ListNode(sum);
      currentNode = l3;
    } else {
      currentNode.next = new ListNode(sum);
      currentNode = currentNode.next;
    }
  }

  return l3;
};

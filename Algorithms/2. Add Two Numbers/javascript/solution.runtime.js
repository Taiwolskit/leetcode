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
  let overlap = 0;
  let output = new ListNode(0);
  let head = output;

  while (output) {
    output.val = overlap;
    output.val += l1 ? l1.val : 0;
    output.val += l2 ? l2.val : 0;
    overlap = 0;
    if (output.val > 9) {
      output.val %= 10;
      overlap = 1;
    }

    output.next =
      (l1 && l1.next) || (l2 && l2.next) || (overlap ? new ListNode(0) : null);
    output = output.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return head;
};

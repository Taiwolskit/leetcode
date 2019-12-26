/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let curr = head;
  while (curr && curr.next) {
    const temp = curr.val;
    curr.val = curr.next.val;
    curr.next.val = temp;
    curr = curr.next.next;
  }

  return head;
};

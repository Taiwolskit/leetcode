/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (!head || !head.next) return head;
  let start = head,
    count = 0;
  while (start && count < k) {
    start = start.next;
    count++;
  }
  if (count < k) return head;

  let previous = null,
    current = head,
    count_2 = 0;
  while (current && count_2 < k) {
    let next_head = current.next;
    current.next = previous;
    previous = current;
    current = next_head;
    count_2++;
  }
  head.next = reverseKGroup(current, k);
  return previous;
};

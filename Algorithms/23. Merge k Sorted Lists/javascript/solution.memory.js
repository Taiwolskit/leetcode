/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  return merge(lists, 0, lists.length - 1);
};

var merge = function(lists, l, r) {
  if (l > r) return null;
  if (l == r) return lists[l];
  let m = Math.floor((r - l) / 2) + l;
  var left = merge(lists, l, m);
  var right = merge(lists, m + 1, r);
  var head = new ListNode(0);
  var dummy = head;
  while (left != null && right != null) {
    if (left.val <= right.val) {
      head.next = left;
      left = left.next;
    } else {
      head.next = right;
      right = right.next;
    }
    head = head.next;
  }
  if (left != null) head.next = left;
  else head.next = right;
  return dummy.next;
};

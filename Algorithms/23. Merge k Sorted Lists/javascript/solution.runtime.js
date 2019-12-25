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
  return split(lists, 0, lists.length - 1);
};

function split(list, start, end) {
  if (start == end) return list[start];

  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    let left = split(list, start, mid);
    let right = split(list, mid + 1, end);

    return mergeTwo(left, right);
  }

  return null;
}

function mergeTwo(l1, l2) {
  if (!l1 || !l2) return l1 || l2;

  if (l1.val < l2.val) {
    l1.next = mergeTwo(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwo(l1, l2.next);
    return l2;
  }
}

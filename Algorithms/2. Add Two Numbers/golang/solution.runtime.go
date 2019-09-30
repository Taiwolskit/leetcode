/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
  var ret, last, n *ListNode
  var v1, v2, s, rest int

  for l1 != nil || l2 != nil {
    v1, v2 = 0, 0
    if l1 != nil {
      v1 = l1.Val
    }
    if l2 != nil {
      v2 = l2.Val
    }

    s = v1 + v2 + rest
    s, rest = s%10, s/10
    n = &ListNode{Val: s}

    if ret == nil {
      ret = n
      last = n
    } else {
      last.Next = n
      last = last.Next
    }

    if l1 != nil {
      l1 = l1.Next
    }
    if l2 != nil {
      l2 = l2.Next
    }
  }
  if rest > 0 && last != nil {
    last.Next = &ListNode{Val: rest}
  }
  return ret
}

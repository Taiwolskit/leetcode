// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
//
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
impl Solution {
    pub fn add_two_numbers(
        l1: Option<Box<ListNode>>,
        l2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        let mut p = l1;
        let mut q = l2;

        let mut dummyHead = Some(Box::new(ListNode::new(0)));
        let mut curr = dummyHead.as_mut();
        let mut carry = 0;

        while p.is_some() || q.is_some() || carry > 0 {
            let mut sum = carry;
            if let Some(node) = p {
                sum += node.val;
                p = node.next;
            }

            if let Some(node) = q {
                sum += node.val;
                q = node.next;
            }

            if let Some(node) = curr {
                node.next = Some(Box::new(ListNode::new(sum % 10)));
                curr = node.next.as_mut();
            }

            carry = if sum >= 10 { 1 } else { 0 };
        }

        return dummyHead.unwrap().next;
    }
}

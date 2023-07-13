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
    pub fn insertion_sort_list(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut dummy_head = Some(Box::new(ListNode { val: 0, next: None }));
        let mut curr = head;
        let mut prev;
        let mut next;

        while let Some(mut boxed_node) = curr {
            curr = boxed_node.next.take();
            prev = &mut dummy_head;

            while prev.as_ref().unwrap().next.is_some()
                && prev.as_ref().unwrap().next.as_ref().unwrap().val < boxed_node.val
            {
                prev = &mut prev.as_mut().unwrap().next;
            }

            next = prev.as_mut().unwrap().next.take();
            boxed_node.next = next;
            prev.as_mut().unwrap().next = Some(boxed_node);
        }

        dummy_head.unwrap().next
    }
}

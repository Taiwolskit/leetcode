// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
//
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn search_bst(root: Option<Rc<RefCell<TreeNode>>>, val: i32) -> Option<Rc<RefCell<TreeNode>>> {
        let mut node = root;
        while let Some(rc_node) = node.clone() {
            let cur_node = rc_node.borrow();
            if rc_node.borrow().val == val {
                return Some(rc_node.clone());
            }
            if rc_node.borrow().val > val {
                node = rc_node.borrow().left.clone();
            } else {
                node = rc_node.borrow().right.clone();
            }
        }
        None
    }
}

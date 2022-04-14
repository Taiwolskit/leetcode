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
        if root.is_none() || root.as_ref().unwrap().borrow().val == val {
            return root;
        }

        if root.as_ref().unwrap().borrow().val > val {
            return Self::search_bst(root.as_ref().unwrap().borrow().left.clone(), val);
        } else {
            return Self::search_bst(root.as_ref().unwrap().borrow().right.clone(), val);
        }
    }
}

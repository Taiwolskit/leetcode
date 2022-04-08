use std::cmp::Reverse;
use std::collections::BinaryHeap;

struct KthLargest {
    k: usize,
    hp: BinaryHeap<Reverse<i32>>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl KthLargest {

    fn new(k: i32, nums: Vec<i32>) -> Self {
        let k = k as usize;
        let mut hp = BinaryHeap::new();

        nums.iter().for_each(|n| {
            hp.push(Reverse(*n));
        });

        while hp.len() > k {
            hp.pop();
        }

        KthLargest { k, hp }
    }

    fn add(&mut self, val: i32) -> i32 {
        self.hp.push(Reverse(val));

        if self.hp.len() > self.k {
            self.hp.pop();
        }

        match self.hp.peek() {
            None => -1,
            Some(v) => v.0,
        }
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * let obj = KthLargest::new(k, nums);
 * let ret_1: i32 = obj.add(val);
 */

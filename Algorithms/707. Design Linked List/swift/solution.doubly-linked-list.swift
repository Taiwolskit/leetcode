class ListNode {
    let val: Int
    var next: ListNode?
    var prev: ListNode?

    init(_ val: Int, prev: ListNode? = nil, next: ListNode? = nil) {
        self.val = val
        self.prev = prev
        self.next = next
    }
}

class MyLinkedList {
    private var head: ListNode?
    private var tail: ListNode?
    private var size: Int

    init() {
        self.size = 0
        self.head = ListNode(0)
        self.tail = ListNode(0)
        self.head?.next = self.tail
        self.tail?.prev = self.head
    }

    func get(_ index: Int) -> Int {
        guard index >= 0 && index < size else {
            return -1
        }

        var curr: ListNode?
        if index + 1 < self.size - index {
            curr = self.head
            for _ in 0...index {
                curr = curr?.next
            }
        } else {
            curr = self.tail
            for _ in index..<size {
                curr = curr?.prev
            }
        }
        return curr!.val
    }

    func addAtHead(_ val: Int) {
        let pred = self.head
        let succ = self.head?.next

        self.size += 1
        let toAdd = ListNode(val, prev: pred, next: succ)
        pred?.next = toAdd
        succ?.prev = toAdd
    }

    func addAtTail(_ val: Int) {
        let pred = self.tail?.prev
        let succ = self.tail

        self.size += 1
        let toAdd = ListNode(val, prev: pred, next: succ)
        pred?.next = toAdd
        succ?.prev = toAdd
    }

    func addAtIndex(_ index: Int, _ val: Int) {
        if index > self.size {
            return
        }

        var currIndex = index
        if index < 0 {
            currIndex = 0
        }

        var pred: ListNode?
        var succ: ListNode?

        if index < self.size - index {
            pred = self.head
            for _ in 0..<index {
                pred = pred?.next
            }
            succ = pred?.next
        } else {
            succ = self.tail
            for _ in index..<self.size {
                succ = succ?.prev
            }
            pred = succ?.prev
        }

        self.size += 1
        let toAdd = ListNode(val, prev: pred, next: succ)
        pred?.next = toAdd
        succ?.prev = toAdd
    }

    func deleteAtIndex(_ index: Int) {
        guard index >= 0 && index < self.size else {
            return
        }

        var pred: ListNode?
        var succ: ListNode?
        if index < self.size - index {
            pred = self.head
            for _ in 0..<index {
                pred = pred?.next
            }
            succ = pred?.next?.next
        } else {
            succ = self.tail
            for _ in 0..<(self.size - index - 1) {
                succ = succ?.prev
            }
            pred = succ?.prev?.prev
        }

        self.size -= 1
        pred?.next = succ
        succ?.prev = pred
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * let obj = MyLinkedList()
 * let ret_1: Int = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index, val)
 * obj.deleteAtIndex(index)
 */

class ListNode {
    let val: Int
    var next: ListNode?

    init(_ val: Int, next: ListNode? = nil) {
        self.val = val
        self.next = next
    }
}

class MyLinkedList {
    private var head: ListNode?
    private var size: Int

    init() {
        self.size = 0
        self.head = ListNode(0)
    }

    func get(_ index: Int) -> Int {
        guard index >= 0 && index < self.size else {
            return -1
        }

        var curr: ListNode? = self.head
        for _ in 0...index {
            curr = curr?.next
        }
        return curr!.val
    }

    func addAtHead(_ val: Int) {
        self.addAtIndex(0, val)
    }

    func addAtTail(_ val: Int) {
        self.addAtIndex(self.size, val)
    }

    func addAtIndex(_ index: Int, _ val: Int) {
        guard index <= self.size else {
            return
        }

        var currIndex = max(index, 0)

        self.size += 1
        var pred: ListNode? = self.head
        for _ in 0..<currIndex {
            pred = pred?.next
        }

        let toAdd = ListNode(val, next: pred?.next)
        pred?.next = toAdd
    }

    func deleteAtIndex(_ index: Int) {
        guard index >= 0 && index < self.size else {
            return
        }

        self.size -= 1
        var pred: ListNode? = self.head
        for _ in 0..<index {
            pred = pred?.next
        }

        pred?.next = pred?.next?.next
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

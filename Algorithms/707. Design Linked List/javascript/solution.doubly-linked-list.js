class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

var MyLinkedList = function () {
    this.size = 0;
    this.head = new ListNode(0);
    this.tail = new ListNode(0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) {
        return -1;
    }

    let curr;
    if (index + 1 < this.size - index) {
        curr = this.head;
        for (let i = 0; i <= index; i++) {
            curr = curr.next;
        }
    } else {
        curr = this.tail;
        for (let i = this.size; i > index; i--) {
            curr = curr.prev;
        }
    }
    return curr.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let pred = this.head,
        succ = this.head.next;
    this.size++;
    const toAdd = new ListNode(val);
    toAdd.prev = pred;
    toAdd.next = succ;
    pred.next = toAdd;
    succ.prev = toAdd;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let succ = this.tail,
        pred = this.tail.prev;
    this.size++;
    const toAdd = new ListNode(val);
    toAdd.prev = pred;
    toAdd.next = succ;
    pred.next = toAdd;
    succ.prev = toAdd;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.size) {
        return;
    }

    index = index || 0;

    let pred, succ;
    if (index < this.size - index) {
        pred = this.head;
        for (let i = 0; i < index; i++) {
            pred = pred.next;
        }
        succ = pred.next;
    } else {
        succ = this.tail;
        for (let i = this.size; i > index; i--) {
            succ = succ.prev;
        }
        pred = succ.prev;
    }

    this.size++;
    const toAdd = new ListNode(val);
    toAdd.prev = pred;
    toAdd.next = succ;
    pred.next = toAdd;
    succ.prev = toAdd;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) {
        return;
    }

    let pred, succ;
    if (index < this.size - index) {
        pred = this.head;
        for (let i = 0; i < index; i++) {
            pred = pred.next;
        }
        succ = pred.next.next;
    } else {
        succ = this.tail;
        for (let i = this.size - 1; i > index; i--) {
            succ = succ.prev;
        }
        pred = succ.prev.prev;
    }

    this.size--;
    pred.next = succ;
    succ.prev = pred;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var MyHashSet = function () {
    this.keyRange = 769;
    this.buckets = new Array(this.keyRange).fill(new Bucket());
};

MyHashSet.prototype.hash = function (key) {
    return key % this.keyRange;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    this.buckets[this.hash(key)].insert(key);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    this.buckets[this.hash(key)].delete(key);
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    return this.buckets[this.hash(key)].exists(key);
};

class Node {
    constructor(value, nextNode = null) {
        this.value = value;
        this.next = nextNode;
    }
}

class Bucket {
    constructor() {
        this.head = new Node(0);
    }

    insert(newValue) {
        if (!this.exists(newValue)) {
            this.head.next = new Node(newValue, this.head.next);
        }
    }

    delete(value) {
        let prev = this.head,
            curr = this.head.next;
        while (curr) {
            if (curr.value === value) {
                prev.next = curr.next;
                return;
            }
            prev = curr;
            curr = curr.next;
        }
    }

    exists(value) {
        let curr = this.head.next;
        while (curr) {
            if (curr.value === value) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

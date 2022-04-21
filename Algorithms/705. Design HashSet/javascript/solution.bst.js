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

class Bucket {
    constructor() {
        this.tree = new BSTree();
    }

    insert(value) {
        this.tree.root = this.tree.insertIntoBST(this.tree.root, value);
    }

    delete(value) {
        this.tree.root = this.tree.deleteNode(this.tree.root, value);
    }

    exists(value) {
        return this.tree.searchBST(this.tree.root, value) !== null;
    }
}

class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BSTree {
    constructor() {
        this.root = null;
    }

    searchBST(root, val) {
        if (root === null || root.val === val) {
            return root;
        }

        return root.val < val
            ? this.searchBST(root.right, val)
            : this.searchBST(root.left, val);
    }

    insertIntoBST(root, val) {
        if (root === null) {
            return new TreeNode(val);
        }

        if (val < root.val) {
            root.left = this.insertIntoBST(root.left, val);
        } else if (val > root.val) {
            root.right = this.insertIntoBST(root.right, val);
        }

        return root;
    }

    successor(root) {
        let node = root.right;
        while (node.left) {
            node = node.left;
        }
        return node.val;
    }

    predecessor(root) {
        let node = root.left;
        while (node.right) {
            node = node.right;
        }
        return node.val;
    }

    deleteNode(root, val) {
        if (root === null) {
            return null;
        }

        if (val < root.val) {
            root.left = this.deleteNode(root.left, val);
        } else if (val > root.val) {
            root.right = this.deleteNode(root.right, val);
        } else {
            if (!(root.left || root.right)) {
                root = null;
            } else if (root.right) {
                root.val = this.successor(root);
                root.right = this.deleteNode(root.right, root.val);
            } else {
                root.val = this.predecessor(root);
                root.left = this.deleteNode(root.left, root.val);
            }
        }

        return root;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

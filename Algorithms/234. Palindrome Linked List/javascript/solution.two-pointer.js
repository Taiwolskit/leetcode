/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    const vals = [];
    let currentNode = head;
    while (currentNode) {
        vals.push(currentNode.val);
        currentNode = currentNode.next;
    }
    for (let left = 0, right = vals.length - 1; left < right; left++, right--) {
        if (vals[left] !== vals[right]) {
            return false;
        }
    }
    return true;
};

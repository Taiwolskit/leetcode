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
    let frontPointer = head;
    const recursivelyCheck = (currentNode) => {
        if (currentNode) {
            if (!recursivelyCheck(currentNode.next)) {
                return false;
            }
            if (frontPointer.val !== currentNode.val) {
                return false;
            }
            frontPointer = frontPointer.next;
        }
        return true;
    };
    return recursivelyCheck(head);
};

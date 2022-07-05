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
    if (!head) return true;

    let firstHalfEnd = endOfFirstHalf(head);
    let secondHalfStart = reverseList(firstHalfEnd.next);

    let result = true;
    let firstPosition = head;
    let secondPosition = secondHalfStart;
    while (result && secondPosition) {
        if (firstPosition.val !== secondPosition.val) {
            result = false;
        }
        firstPosition = firstPosition.next;
        secondPosition = secondPosition.next;
    }

    firstHalfEnd.next = reverseList(secondHalfStart);
    return result;
};

const endOfFirstHalf = (head) => {
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

const reverseList = (head) => {
    let previous = null;
    let current = head;
    while (current) {
        const next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
};

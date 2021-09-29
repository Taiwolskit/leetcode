/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
    let len = 0;
    let cur = head;
    while (cur) {
        ++len;
        cur = cur.next;
    }

    let remainder = 0;
    let width = Math.floor(len / k);
    if (width === 0) width = 1;
    else remainder = len % k;

    let result = [];
    cur = head;
    for (let i = 0; i < k; i++) {
        const tmp = cur;

        let j = 0;
        while (j < width + (i < remainder) - 1) {
            if (cur) {
                cur = cur.next;
            }
            j++;
        }

        if (cur) {
            const temp = cur.next;
            cur.next = null;
            cur = temp;
        }

        result.push(tmp);
    }
    return result;
};

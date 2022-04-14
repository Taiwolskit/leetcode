<?php

/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution
{

    /**
     * @param ListNode $l1
     * @param ListNode $l2
     * @return ListNode
     */
    function addTwoNumbers($l1, $l2)
    {
        $dummyHead = new ListNode(0);
        $p = $l1;
        $q = $l2;
        $curr = $dummyHead;
        $carry = 0;
        while ($p || $q || $carry) {
            $x = $p ? $p->val : 0;
            $y = $q ? $q->val : 0;
            $sum = $x + $y + $carry;
            $carry = intval($sum / 10);
            $curr->next = new ListNode($sum % 10);
            $curr = $curr->next;
            $p = $p ? $p->next : null;
            $q = $q ? $q->next : null;
        }

        return $dummyHead->next;
    }
}

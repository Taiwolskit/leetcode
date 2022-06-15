<?php

/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val) { $this->val = $val; }
 * }
 */

class Solution
{
    /**
     * @param ListNode $headA
     * @param ListNode $headB
     * @return ListNode
     */
    function getIntersectionNode($headA, $headB)
    {
        while ($headA) {
            $pB = $headB;
            while ($pB) {
                if ($pB === $headA) {
                    return $headA;
                }
                $pB = $pB->next;
            }
            $headA = $headA->next;
        }
        return null;
    }
}

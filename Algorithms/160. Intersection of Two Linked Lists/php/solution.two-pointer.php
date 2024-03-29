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
        $pA = $headA;
        $pB = $headB;
        while ($pA !== $pB) {
            $pA = $pA ? $pA->next : $headB;
            $pB = $pB ? $pB->next : $headA;
        }
        return $pA;
    }
}

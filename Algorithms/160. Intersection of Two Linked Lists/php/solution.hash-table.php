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
        $nodesInB = [];
        while ($headB) {
            $nodesInB[spl_object_id($headB)] = true;
            $headB = $headB->next;
        }

        while ($headA) {
            if (isset($nodesInB[spl_object_id($headA)])) {
                return $headA;
            }
            $headA = $headA->next;
        }
        return null;
    }
}

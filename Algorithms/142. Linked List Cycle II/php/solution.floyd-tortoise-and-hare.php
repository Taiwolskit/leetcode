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
     * @param ListNode $head
     * @return ListNode
     */
    function detectCycle($head)
    {
        if (is_null($head)) {
            return null;
        }

        $intersect = $this->getIntersect($head);
        if (is_null($intersect)) {
            return null;
        }

        $ptr1 = $head;
        $ptr2 = $intersect;
        while ($ptr1 !== $ptr2) {
            $ptr1 = $ptr1->next;
            $ptr2 = $ptr2->next;
        }
        return $ptr1;
    }

    private function getIntersect($head)
    {
        $tortoise = $head;
        $hare = $head;

        while (!is_null($hare) && !is_null($hare->next)) {
            $tortoise = $tortoise->next;
            $hare = $hare->next->next;
            if ($tortoise === $hare) {
                return $tortoise;
            }
        }
        return null;
    }
}
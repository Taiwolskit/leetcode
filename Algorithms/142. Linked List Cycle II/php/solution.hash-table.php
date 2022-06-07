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
        $visited = [];
        while (!is_null($head)) {
            if (isset($visited[$head->val])) {
                return $head;
            }
            $visited[$head->val] = true;
            $head = $head->next;
        }
        return null;
    }
}

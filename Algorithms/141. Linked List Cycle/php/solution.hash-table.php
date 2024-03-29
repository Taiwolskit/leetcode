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
     * @return Boolean
     */
    function hasCycle($head)
    {
        $nodesSeen = [];
        while (!is_null($head)) {
            if (in_array($head, $nodesSeen)) {
                return true;
            }
            $nodesSeen[] = $head;
            $head = $head->next;
        }
        return false;
    }
}

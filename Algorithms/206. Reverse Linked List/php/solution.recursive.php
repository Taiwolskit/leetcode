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
     * @param ListNode $head
     * @return ListNode
     */
    function reverseList($head)
    {
        if (is_null($head) || is_null($head->next)) {
            return $head;
        }

        $p = $this->reverseList($head->next);
        $head->next->next = $head;
        $head->next = null;
        return $p;
    }
}

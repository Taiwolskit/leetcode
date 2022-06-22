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
     * @param Integer $n
     * @return ListNode
     */
    function removeNthFromEnd($head, $n)
    {
        $dummy = new ListNode(0, $head);
        $first = $head;
        $length = 0;
        while (!is_null($first)) {
            $length++;
            $first = $first->next;
        }

        $first = $dummy;
        for ($i = $length - $n; $i > 0; $i--) {
            $first = $first->next;
        }

        $first->next = $first->next->next;
        return $dummy->next;
    }
}

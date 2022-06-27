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
     * @param Integer $val
     * @return ListNode
     */
    function removeElements($head, $val)
    {
        $sentinel = new ListNode(0, $head);
        $prev = $sentinel;
        $curr = $head;
        while ($curr != null) {
            if ($curr->val == $val) {
                $prev->next = $curr->next;
            } else {
                $prev = $curr;
            }
            $curr = $curr->next;
        }
        return $sentinel->next;
    }
}

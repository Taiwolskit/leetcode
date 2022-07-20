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
     * @param Integer $k
     * @return ListNode
     */
    function rotateRight($head, $k)
    {
        if (is_null($head) || is_null($head->next)) {
            return $head;
        }

        $oldTail = $head;
        $n = 1;
        while (!is_null($oldTail->next)) {
            $oldTail = $oldTail->next;
            $n++;
        }
        $oldTail->next = $head;

        $newTail = $head;
        for ($i = 0; $i < $n - $k % $n - 1; $i++) {
            $newTail = $newTail->next;
        }
        $newHead = $newTail->next;
        $newTail->next = null;
        return $newHead;
    }
}

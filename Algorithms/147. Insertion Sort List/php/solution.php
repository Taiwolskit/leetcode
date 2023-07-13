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
    function insertionSortList($head)
    {
        $dummyHead = new ListNode(0, null);
        $curr = $head;

        while ($curr != null) {
            $prev = $dummyHead;

            while ($prev->next != null && $prev->next->val < $curr->val) {
                $prev = $prev->next;
            }

            $nextNode = $curr->next;
            $curr->next = $prev->next;
            $prev->next = $curr;
            $curr = $nextNode;
        }

        return $dummyHead->next;
    }
}

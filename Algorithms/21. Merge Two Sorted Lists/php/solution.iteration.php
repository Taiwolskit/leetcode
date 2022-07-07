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
     * @param ListNode $list1
     * @param ListNode $list2
     * @return ListNode
     */
    function mergeTwoLists($list1, $list2)
    {
        $prehead = new ListNode(0);

        $prev = $prehead;
        while (!is_null($list1) && !is_null($list2)) {
            if ($list1->val <= $list2->val) {
                $prev->next = $list1;
                $list1 = $list1->next;
            } else {
                $prev->next = $list2;
                $list2 = $list2->next;
            }
            $prev = $prev->next;
        }
        $prev->next = $list1 ?? $list2;
        return $prehead->next;
    }
}

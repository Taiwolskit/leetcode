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
    function middleNode($head)
    {
        $arr = [$head];
        while ($arr[count($arr) - 1]->next) {
            $arr[] = $arr[count($arr) - 1]->next;
        }
        return $arr[count($arr) / 2];
    }
}

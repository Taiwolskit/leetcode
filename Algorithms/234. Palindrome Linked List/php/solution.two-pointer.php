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
     * @return Boolean
     */
    function isPalindrome($head)
    {
        $vals = [];
        $currentNode = $head;
        while ($currentNode) {
            $vals[] = $currentNode->val;
            $currentNode = $currentNode->next;
        }
        for ($left = 0, $right = count($vals) - 1; $left < $right; $left++, $right--) {
            if ($vals[$left] != $vals[$right]) {
                return false;
            }
        }
        return true;
    }
}

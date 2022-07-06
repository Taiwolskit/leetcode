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

    private $frontPointer = null;

    /**
     * @param ListNode $head
     * @return Boolean
     */
    function isPalindrome($head)
    {
        $this->frontPointer = $head;
        return $this->recursivelyCheck($head);
    }

    function recursivelyCheck($currentNode)
    {
        if (is_null($currentNode)) {
            return true;
        }
        if (!$this->recursivelyCheck($currentNode->next) || $currentNode->val != $this->frontPointer->val) {
            return false;
        }
        $this->frontPointer = $this->frontPointer->next;
        return true;
    }
}

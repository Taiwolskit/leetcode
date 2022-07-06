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
        if (is_null($head)) {
            return true;
        }

        $firstHalfEnd = $this->endOfFirstHalf($head);
        $secondHalfStart = $this->reverseList($firstHalfEnd->next);

        $result = true;
        $firstPosition = $head;
        $secondPosition = $secondHalfStart;
        while ($result && !is_null($secondPosition)) {
            if ($firstPosition->val != $secondPosition->val) {
                $result = false;
            }
            $firstPosition = $firstPosition->next;
            $secondPosition = $secondPosition->next;
        }

        $firstHalfEnd->next = $this->reverseList($secondHalfStart);
        return $result;
    }

    function endOfFirstHalf($head)
    {
        $fast = $slow = $head;
        while (!is_null($fast->next) && !is_null($fast->next->next)) {
            $fast = $fast->next->next;
            $slow = $slow->next;
        }
        return $slow;
    }

    function reverseList($head)
    {
        $prev = null;
        $current = $head;
        while ($current) {
            $nextNode = $current->next;
            $current->next = $prev;
            $prev = $current;
            $current = $nextNode;
        }
        return $prev;
    }
}

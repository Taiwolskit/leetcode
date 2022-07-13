<?php

/**
 * Definition for a Node.
 * class Node {
 *     public $val = null;
 *     public $next = null;
 *     function __construct($val = 0) {
 *         $this->val = $val;
 *         $this->next = null;
 *     }
 * }
 */

class Solution
{
    /**
     * @param Node $root
     * @param Integer $insertVal
     * @return Node
     */
    function insert($head, $insertVal)
    {
        if (is_null($head)) {
            $node = new Node($insertVal);
            $node->next = $node;
            return $node;
        }

        $prev = $head;
        $curr = $head->next;
        while ($curr != $head) {
            if ($prev->val <= $insertVal && $insertVal <= $curr->val) {
                break;
            }
            if ($prev->val > $curr->val && ($insertVal >= $prev->val || $insertVal <= $curr->val)) {
                break;
            }
            $prev = $curr;
            $curr = $curr->next;
        }

        $node = new Node($insertVal);
        $node->next = $curr;
        $prev->next = $node;
        return $head;
    }
}

<?php

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($val = 0, $left = null, $right = null) {
 *         $this->val = $val;
 *         $this->left = $left;
 *         $this->right = $right;
 *     }
 * }
 */
class BSTIterator
{
    private $stack = array();

    /**
     * @param TreeNode $root
     */
    function __construct($root)
    {
        $this->leftmostInorder($root);
    }

    function leftmostInorder($root)
    {
        while (!is_null($root)) {
            $this->stack[] = $root;
            $root = $root->left;
        }
    }

    /**
     * @return Integer
     */
    function next()
    {
        $topmostNode = array_pop($this->stack);
        if (isset($topmostNode->right)) {
            $this->leftmostInorder($topmostNode->right);
        }
        return $topmostNode->val;
    }

    /**
     * @return Boolean
     */
    function hasNext()
    {
        return !empty($this->stack);
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * $obj = BSTIterator($root);
 * $ret_1 = $obj->next();
 * $ret_2 = $obj->hasNext();
 */

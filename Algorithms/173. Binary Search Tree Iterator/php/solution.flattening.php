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
    private $nodesSorted = array();
    private $index = -1;

    /**
     * @param TreeNode $root
     */
    function __construct($root)
    {
        $this->inorder($root);
    }

    function inorder($root)
    {
        if (is_null($root)) {
            return;
        }
        $this->inorder($root->left);
        $this->nodesSorted[] = $root->val;
        $this->inorder($root->right);
    }

    /**
     * @return Integer
     */
    function next()
    {
        return $this->nodesSorted[++$this->index];
    }

    /**
     * @return Boolean
     */
    function hasNext()
    {
        return $this->index + 1 < count($this->nodesSorted);
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * $obj = BSTIterator($root);
 * $ret_1 = $obj->next();
 * $ret_2 = $obj->hasNext();
 */

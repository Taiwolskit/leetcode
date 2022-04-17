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
class Solution
{
    /**
     * @param TreeNode $root
     * @return TreeNode
     */
    function increasingBST($root)
    {
        $ans = new TreeNode(0);
        $this->cur = $ans;
        $this->inorder($root);
        return $ans->right;
    }

    function inorder($node)
    {
        if ($node == null) {
            return null;
        }
        $this->inorder($node->left);
        $node->left = null;
        $this->cur->right = $node;
        $this->cur = $node;
        $this->inorder($node->right);
    }
}

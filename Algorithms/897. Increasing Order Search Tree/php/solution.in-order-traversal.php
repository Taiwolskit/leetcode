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
    private $vals = [];

    /**
     * @param TreeNode $root
     * @return TreeNode
     */
    function increasingBST($root)
    {
        $this->inorder($root);
        sort($this->vals);
        $ans = new TreeNode(0);
        $cur = $ans;
        foreach ($this->vals as $v) {
            $cur->right = new TreeNode($v);
            $cur = $cur->right;
        }
        return $ans->right;
    }

    function inorder($node)
    {
        if ($node == null) {
            return null;
        }
        $node->left = $this->inorder($node->left);
        $this->vals[] = $node->val;
        $node->right = $this->inorder($node->right);
    }
}

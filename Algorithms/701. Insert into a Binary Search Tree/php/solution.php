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
class Solution {
    /**
     * @param TreeNode $root
     * @param Integer $val
     * @return TreeNode
     */
    function insertIntoBST($root, $val) {
        $node = $root;
        while ($node) {
            if ($val > $node->val) {
                if (!$node->right) {
                    $node->right = new TreeNode($val);
                    return $root;
                }
                $node = $node->right;
            } else {
                if (!$node->left) {
                    $node->left = new TreeNode($val);
                    return $root;
                }
                $node = $node->left;
            }
        }
        return new TreeNode($val);
    }
}

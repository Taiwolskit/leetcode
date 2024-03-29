# [94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)

Given the `root` of a binary tree, return _the inorder traversal of its nodes' values_.

**Example 1:**

![inorder_1](inorder_1.jpg)

    Input: root = [1,null,2,3]
    Output: [1,3,2]

**Example 2:**

    Input: root = []
    Output: []

**Example 3:**

    Input: root = [1]
    Output: [1]

**Example 4:**

![inorder_5](inorder_5.jpg)

    Input: root = [1,2]
    Output: [2,1]

**Example 5:**

![inorder_4](inorder_4.jpg)

    Input: root = [1,null,2]
    Output: [1,2]

**Constraints:**

-   The number of nodes in the tree is in the range `[0, 100]`.
-   `-100 <= Node.val <= 100`

**Follow up:** Recursive solution is trivial, could you do it iteratively?

**註解：**inorder traversal，就是先拜訪左子節點、再來拜訪父節點、最後拜訪右子節點

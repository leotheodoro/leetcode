/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const result = 1
function maxDepth(root: TreeNode | null): number {
    if(!root) return 0

    function dfs(root, depth) {
        if(!root) return depth

        return Math.max(dfs(root.left, depth+1), dfs(root.right, depth+1))
    }

    return dfs(root, 0)
};
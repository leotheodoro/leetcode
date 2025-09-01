/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    function inorder(current_node, result) {
        if(current_node) {
            inorder(current_node.left, result)
            result.push(current_node.val)
            inorder(current_node.right, result)
        }
    }

    const result = []
    inorder(root, result)
    return result
};
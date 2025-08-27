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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const queue = []
    const response = []

    queue.push(root)

    while(queue.length > 0) {
        const level = []
        const size = queue.length
        
        for(let i = 0; i < size; i++) {
            const current_node = queue.shift()
            if(current_node) {
                level.push(current_node.val)

                if(current_node.left) {
                    queue.push(current_node.left)
                }

                if(current_node.right) {
                    queue.push(current_node.right)
                }
            }
        }

        if (level.length > 0) {
            response.push(level)
        }


    }

    return response
};
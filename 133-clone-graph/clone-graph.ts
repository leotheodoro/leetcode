/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */


function cloneGraph(node: _Node | null): _Node | null {
	if(!node) return null

    const queue = [node]
    const clones = {}

    clones[node.val] = new _Node(node.val, [])

    while (queue.length > 0) {
        const current = queue.shift()
        const currentClone = clones[current.val]

        for(let i = 0; i < current.neighbors.length; i++) {
            if(!Object.keys(clones).includes(String(current.neighbors[i].val))) {
                clones[current.neighbors[i].val] = new _Node(current.neighbors[i].val, [])
                queue.push(current.neighbors[i])
            }
            currentClone.neighbors.push(clones[current.neighbors[i].val])
        }
    }

    return clones[node.val]
};
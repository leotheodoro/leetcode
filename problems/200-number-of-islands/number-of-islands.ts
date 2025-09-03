function numIslands(grid: string[][]): number {
    if(grid.length === 0) return 0

    const [rows, cols] = [grid.length, grid[0].length]
    const visited = new Set()
    let islands = 0

    function dfs(row, column) {
        if(
            visited.has(`${row},${column}`) 
            || row < 0 
            || column < 0 
            || row >= rows 
            || column >= cols
            || grid[row][column] === '0'
        ) {
            return
        }

        visited.add(`${row},${column}`)
        dfs(row+1, column)
        dfs(row-1, column)
        dfs(row, column+1)
        dfs(row, column-1)
    }

    for(let row = 0; row < rows; row++) {
        for(let column = 0; column < cols; column++) {
            if(grid[row][column] === '1' && !visited.has(`${row},${column}`)) {
                dfs(row, column)
                islands++
            }
        }
    }

    return islands
};
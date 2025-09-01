/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = Array.from({length: 9}, () => [])
    const cols =  Array.from({length: 9}, () => [])
    const boxes =  Array.from({length: 3}, () => Array.from({length: 3}, () => []))

    for(let r = 0; r < 9; r++) {
        for(let c = 0; c < 9; c++) {
            const current = board[r][c]
            if(current == ".") continue;

            const boxR = Math.floor(r / 3)
            const boxC = Math.floor(c / 3)

            if(rows[r].includes(current) || cols[c].includes(current) || boxes[boxR][boxC].includes(current)) {
                return false
            }

            rows[r].push(current)
            cols[c].push(current)
            boxes[boxR][boxC].push(current)
        }
    }

    return true
};
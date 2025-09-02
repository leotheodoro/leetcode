const phoneKeyboard = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
}



function letterCombinations(digits: string): string[] {
    if(!digits) return []

    const result = []

    function backtracking(permutation, digits) {
        if(!digits) {
            result.push(permutation)
            return
        }

        for(const letter of phoneKeyboard[digits[0]]) {
            backtracking(permutation+letter, digits.slice(1))
        }
    }

    backtracking("", digits)
    return result
};
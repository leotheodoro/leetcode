function isPalindrome(s: string): boolean {
    const textFormatted = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    let left = 0
    let right = textFormatted.length - 1

    while(left < right) {
        if(textFormatted[left] !== textFormatted[right]) {
            return false
        }

        left++
        right--
    }

    return true
};
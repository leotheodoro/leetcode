function isPalindrome(s: string): boolean {
 

    const textFormatted = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    console.log(textFormatted)

    let left = 0
    let right = textFormatted.length - 1

    while(left < right) {
        console.log('left', textFormatted[left])
        console.log('right', textFormatted[right])
        if(textFormatted[left] !== textFormatted[right]) {
            return false
        }

        left++
        right--
    }

    return true
};
function lengthOfLongestSubstring(s: string): number {
    if(!s) return 0

    let left = 0
    let right = 0
    let max = 1
    const total = []

    while (right < s.length) {
        if(!total.includes(s[right])) {
            total.push(s[right])
            right++
        } else {
            left++
            total.shift()
        }

        max = Math.max(max, total.length)
    }

    return max
};
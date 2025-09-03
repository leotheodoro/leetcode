function mergeAlternately(word1: string, word2: string): string {
    let slow = 0
    let fast = 0
    let str = ""

    while (slow < word1.length || fast < word2.length) {
        if(slow < word1.length) {
            str += word1[slow]
            slow++
        }

        if(fast < word2.length) {
            str += word2[fast]
            fast++
        }
    }
    
    return str
};
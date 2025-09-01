/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let left = 0
    let right = 0

    let response = ''

    while(right < s.length) {
        if(s[right] !== ' ') {
            right += 1
        } else {
            response += s.slice(left, right + 1).split('').reverse().join('')
            right += 1
            left = right
        }
    }

    response += ' '
    response += s.slice(left, right + 2).split('').reverse().join('')

    return response.slice(1)
};
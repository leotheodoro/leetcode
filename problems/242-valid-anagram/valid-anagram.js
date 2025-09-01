/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const arrS = [...s].sort()
    const arrT = [...t].sort()

    return arrS.join('') === arrT.join('')
};
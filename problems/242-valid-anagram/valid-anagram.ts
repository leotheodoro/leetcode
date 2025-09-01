function isAnagram(s: string, t: string): boolean {
    const arrS = [...s].sort()
    const arrT = [...t].sort()

    return arrS.join('') === arrT.join('')
};
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const freq = {};

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (freq[c] === undefined) freq[c] = 0;
    freq[c]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) return i;
  }

  return -1;
};
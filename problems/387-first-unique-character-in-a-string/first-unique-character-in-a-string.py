class Solution:
    def firstUniqChar(self, s: str) -> int:
        freq = {}

        for index, char in enumerate(s):
            if freq.get(char):
                freq[char][1] += 1
            else:
                freq[char] = [index, 1]

        print(freq)
        for value in freq.values():
            if value[1] == 1:
                return value[0]
        
        return -1


        
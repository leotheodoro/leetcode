class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """

        freq = {}

        for num in nums:
            if freq.get(num):
                return True

            freq[num] = True

        return False
        
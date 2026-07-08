class Solution(object):
    def intersection(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """

        freq = {}

        for num in nums1:
            freq[num] = 1

        for num in nums2:
            if freq.get(num):
                freq[num] += 1

        intersection = []
        for key, val in freq.items():
            if(val > 1):
                intersection.append(key)

        return intersection
        
        
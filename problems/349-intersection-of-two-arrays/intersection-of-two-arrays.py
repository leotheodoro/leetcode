class Solution(object):
    def intersection(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """

        seen1 = set()
        for num in nums1:
            seen1.add(num)

        seen2 = set()
        for num in nums2:
            seen2.add(num)

        return list(seen1&seen2)
        
        
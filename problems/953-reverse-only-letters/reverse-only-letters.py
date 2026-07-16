class Solution(object):
    def reverseOnlyLetters(self, s):
        arr = [ch for ch in s]
        left = 0
        right = len(s) - 1

        while left < right:
            if arr[left].isalpha() and arr[right].isalpha():
                arr[left], arr[right] = arr[right], arr[left]
                left += 1
                right -= 1
            elif arr[left].isalpha():
                right -= 1
            elif arr[right].isalpha():
                left += 1
            else:
                left +=1
                right -= 1
        return "".join(arr)
        
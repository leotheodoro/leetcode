/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lower = 0
    let higher = nums.length

    while(lower < higher) {
        const mid = Math.floor((lower + higher) / 2)

        if(nums[mid] === target) {
            return mid
        } else if(nums[mid] < target) {
            lower = mid + 1
        } else {
            higher = mid
        }
    }

    return -1
};
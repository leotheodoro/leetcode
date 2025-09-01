/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const mapper = new Map()

    for(let i = 0; i < nums.length; i++) {
        if(mapper.has(nums[i])) {
            return true
        }
        
        mapper.set(nums[i], 1)
    }

    return false
};
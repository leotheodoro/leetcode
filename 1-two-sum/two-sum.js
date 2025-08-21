/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const m = new Map()

    for(let i = 0; i < nums.length; i++) {
        if(m.get(nums[i]) !== undefined) {
            return [m.get(nums[i]), i]
        }

        m.set(target - nums[i], i)
        console.log(m)
    }
};
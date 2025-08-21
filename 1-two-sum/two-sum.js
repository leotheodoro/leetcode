/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const o = {}

    for(let x = 0; x < nums.length; x++) {
        for(let y = 0; y < nums.length; y++) {
            if(x !== y && nums[x] + nums[y] === target) {
                return [x, y]
            }
        }
    }
};
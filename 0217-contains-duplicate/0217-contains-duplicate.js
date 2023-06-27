/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const duplicateItems = []

    const hasDuplicateItems = nums.some(num => {
        if(duplicateItems.includes(num)) {
            return true
        }
        
       duplicateItems.push(num) 
    })
    
    return hasDuplicateItems
};
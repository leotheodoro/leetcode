function twoSum(nums: number[], target: number): number[] {
    for(let i = 0; i < nums.length; i++) {
        for(let y = 0; y < nums.length; y++) {
            if(nums[i] + nums[y] === target && i !== y) {
                return [i, y]
            }
        }
    }
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const sumOfArray = []
    nums.reduce((acc, curr) => {
        const sum = acc + curr
        sumOfArray.push(sum);
        return sum
    }, 0)

    return sumOfArray
};
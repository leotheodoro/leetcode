function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0;

    nums.sort((a, b) => a - b);

    let max = 1;
    let curr = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue; // skip duplicates
        if (nums[i] === nums[i - 1] + 1) {
            curr++;
            max = Math.max(max, curr);
        } else {
            curr = 1; // reset streak
        }
    }

    return max;
}

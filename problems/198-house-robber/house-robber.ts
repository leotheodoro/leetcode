function rob(nums: number[]): number {
    let [oneBefore, twoBefore] = [0,0]

    for(const n of nums) {
        const current = Math.max(n+twoBefore, oneBefore)
        twoBefore = oneBefore
        oneBefore = current
    }

    return oneBefore
};
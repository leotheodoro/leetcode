function hammingWeight(n: number): number {
    let amount = 0

    while(n > 0) {
        amount += n & 1
        n = n >> 1
    }

    return amount
};
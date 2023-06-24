/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const wealths = accounts.map(account => {
        const wealth = account.reduce((acc, curr) => acc + curr, 0);
        return wealth;
    })

    const wealthOfRichestCustomer = Math.max(...wealths);

    return wealthOfRichestCustomer
};
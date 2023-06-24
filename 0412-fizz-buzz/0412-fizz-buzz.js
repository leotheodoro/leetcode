/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const newArray = [];
    
    for(let i = 1; i <= n; i++) {
        const indexIsDivibleByThree = i % 3 == 0;
        const indexIsDivibleByFive = i % 5 == 0;
        
        if(indexIsDivibleByThree && indexIsDivibleByFive) {
            newArray.push("FizzBuzz")
        } else if(indexIsDivibleByThree) {
            newArray.push("Fizz")
        } else if(indexIsDivibleByFive) {
            newArray.push("Buzz")
        } else {
            newArray.push(i.toString())
        }   
    }

    return newArray
}
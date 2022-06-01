// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

function stepCounter(num) {

    // step 1 set result to num and step counter to 0
    let result = num;
    let totalSteps = 0;

    // step 2 check if the num is even or odd 
    // if num is odd sybtract by one and if num is even divide by 2

    while (result !== 0) {
        if (result % 2 === 0) {
            result = result / 2;
            totalSteps += 1;
        } else if (result % 2 !== 0) {
            result--;
            totalSteps += 1;
        }

    }
    return totalSteps

}
// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.


function plaindromeNumber(num) {
    const reversed = parseInt(num.toString().split('').reverse().join(''))

    if (num === reversed) {
        return true;
    } else {
        return false
    }
}
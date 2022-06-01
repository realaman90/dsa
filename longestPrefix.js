// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const longestCommonPrefix = arr => {
    if (!arr.length) return '';
    let prefix = ''

    const maxStringLength = Math.min(...arr.map(element => element.length));

    for (let i = 0; i < maxStringLength; i++) {
        let char = arr[0][i]
        if (arr.every(element => element[i] === char)) {
            prefix += char
        } else {
            break
        }

    }
    return prefix
}

longestCommonPrefix(["flower", "flow", "flight"])
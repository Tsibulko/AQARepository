import 'esm';

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    const openingBrackets = "({[";
    const closingBrackets = ")}]";

    for (let ch of s) {
        if (openingBrackets.includes(ch)) {
            stack.push(ch);
        } else {
            let lastChar = stack.pop();
            if (openingBrackets.indexOf(lastChar) !== closingBrackets.indexOf(ch)) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValid("({[]})")); 
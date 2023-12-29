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


// /////////////////////////////////////////////////////////////////////////////////////////////////// \\

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let uniqueCount = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[uniqueCount] = nums[i];
            uniqueCount++;
        }
    }

    return uniqueCount;
}

let nums1 = [1, 1, 2];
let result1 = removeDuplicates(nums1);
console.log(result1);

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let result2 = removeDuplicates(nums2);
console.log(result2);


// /////////////////////////////////////////////////////////////////////////////////////////////////// \\

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;

    for(let i = 0;i < nums.length; i++){
        if (nums[i] !== val){
            nums[k] = nums[i];
            k++;
        }
    }
return k;
};
let num1 = [3, 2, 2, 3];
let val1 = 3;
let results1 = removeElement(nums1, val1);
console.log(result1);

let num2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;
let results2 = removeElement(nums2, val2);
console.log(result2);


// /////////////////////////////////////////////////////////////////////////////////////////////////// \\

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

let res1 = strStr("sadbutsad", "sad");
console.log(result1); 
let res2 = strStr("leetcode", "leeto");
console.log(result2); 


// ////////////////////////////////////////////////////////////////////////////////////////////////// \\

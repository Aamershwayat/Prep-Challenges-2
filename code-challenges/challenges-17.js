'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// referring to the given examples find out the pattern used and
// Write a function that takes 2 integers and prints the patterns using recursion
// 
// Input: 16, 5
// Output: [16, 11, 6, 1, -4, 1, 6, 11, 16]
//
// Input: 50, 9
// Output: [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]
//
var arr = []
let num3 = 1;
let num4 = 0;
let flag = true;
const recursionPattern = (int1, int2) => {
    // write your code here
    if (num4 == 0) {
        num4 = int1;
        arr = []
        arr.push(int1);
    }
    if (num4 != num3) {
        if (Math.sign(num3) == 1 && flag) {
            num3 = int1 - int2;
        } else {
            num3 = int1 + int2;
            flag = false;
        }
        arr.push(num3);
        recursionPattern(num3, int2);
    }
    num3 = 1;
    num4 = 0;
    flag = true;
    return arr;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
// 
// Write a function that takes a string (HTML tag)
// and extracts the link from the HTML tag
//
// Ex: <a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a> ==> "www.hackerrank.com"
// Ex: <a href="http://www.something.org"><h1><b>HackerRank</b></h1></a> ==> "www.something.org"
//
// Note:
//  Assume that links end with .com, .org or .net
// 
let newStr = '';
let startAdding = '';
let i = 0;
let active = 0;
const filterLinks = (str) => {
    // write your code here
    if (str[i] == '/' && startAdding != 'start') {
        newStr = '';
        startAdding = 'start';
        active = 0;
    }
    if (str[i] == '"'&& active > 1) {
        startAdding = 'stop';
    }
    if (startAdding == 'stop') {
        startAdding = '';
        i = 0;
        active = 0;
        return newStr;
    }
    if (startAdding == 'start' ) {
        if(active>1){
        newStr = newStr + str[i];
            active++;
        }else{
            active++;
        }
    }
    i++;
    filterLinks(str);
    return newStr;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
// 
// A phrase is considered palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// 
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// as you can see "amanaplanacanalpanama" is a palindrome.
//

const isPalindrome = (str) => {
    // write your code here
    str =str.replace(/\W/g, '').toLowerCase();
    var  firstHalfStr=str.substring(0,str.length/2);
    var secHalfStr =str.substring(str.length/2+1,str.length).split("").reverse().join("");

 return firstHalfStr==secHalfStr;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
// 
//  Write a function that takes 2 arguments, one is a string and the other is an array
//  the function should return a boolean than indicates if both have the same pattern
//
//  EX: 
//  Input: "abba", ['cat', 'dog', 'dog', 'cat']
//  output: true
//
//  as you can see the a acted as the cat in the array, and b as the dog, and the pattern was the same
//
//  Input: "cda", ['cat', 'dog', 'cat']
//  output: false
//
//  here if the pattern had three different things so the array should had 3 different things to be true
//

const samePattern = (str, arr) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------


module.exports = { recursionPattern, filterLinks, isPalindrome, samePattern };
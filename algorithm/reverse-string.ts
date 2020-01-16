#!/usr/bin/env ts-node

function reverseString(s: String): String {
  if (!s || s.length === 0) {
    return s;
  }
  return reverseString(s.substr(1)) + s[0];
}
let s = 'abc';
console.log(reverseString(s));
// function reverseArr(arr) {

// }

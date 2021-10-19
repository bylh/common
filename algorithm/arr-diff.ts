#!/usr/bin/env ts-node

let a = new Set(['P_0103', 'P_0104', 'P_0082', 'P_0105', 'P_0106', 'P_0146', 'P_0145', 'P_0143', 'P_0158']);
let b = new Set(['P_0103', 'P_0104', 'P_0105', 'P_0106', 'P_0143', 'P_0145', 'P_0146', 'P_0158']); 

// 并集
let unionSet = new Set([...a, ...b]);
//[1,2,3,5]

// 交集
let intersectionSet = new Set([...a].filter(x => b.has(x)));
// [2,3]

// ab差集
let differenceABSet = new Set([...a].filter(x => !b.has(x)));
let differenceBASet = new Set([...b].filter(x => !a.has(x)));
console.log('AB:', Array.from(differenceABSet));
console.log('BA', Array.from(differenceBASet))

// let a1 = ['A', 'B', 'C'];
// let a2 = ['D', 'E', 'C', 'A'];

// let result = Array.from(new Set([...a1.filter(x => a2.includes(x)), ...a2]));

// console.log(result);
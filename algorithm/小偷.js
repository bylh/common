// let arr = [2, 7, 9, 3, 1]; // [2, 7, 9 , 8, 1000, 100000, 10] // 搁一间偷一间
let arr = [2, 7, 9 , 8, 1000, 1000000, 10];
let sum = arr[0];
for (let i = 1; i < arr.length -1; i++) {
    if (arr[i] > arr[i - 1] + arr[i + 1]) {
        sum += arr[i] - arr[i - 1];
    } else {
        sum += arr[i + 1] + arr[i -1] ;
        i ++;
    }
}

console.log(sum)

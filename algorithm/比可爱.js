let input = [4, 3, 0, 5, 1, 2];
let output = [];

for(let i = 0; i< input.length; i++) {
    let count = 0;
    for(let j = 0; j < i; j++) {
        if (input[i] > input[j]) {
            count ++;
        }
    }
    output.push(count);
}
console.log(output.join());

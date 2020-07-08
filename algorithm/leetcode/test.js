function climbStairs(n) {
    if (n === 1 || n === 2) {
        return n;
    }
    let sum1 = 1, sum2 = 2;
    let sum = 0;
    for (let i = 3; i <= n; i++) {
        sum = sum1 + sum2;
        sum1 = sum2;
        sum2 = sum;
    }
    return sum;
}

let cache = {};
var climbStairs1 = function(n) {
    if (n in cache) {
        return cache[n]
    } else {
        if(n <= 2) {return n}
        x1 = climbStairs1(n-1);
        x2 = climbStairs1(n-2)
        cache[n] = x1 + x2
        return cache[n]
    }
};


console.log(climbStairs(10), climbStairs1(10));
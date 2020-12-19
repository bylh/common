
function add (x, y, z) {
    return x + y + z
}
function curry (fn) {
    return function(...args) {
        
    }
}

curryAdd = curry(add)
curryAdd(1)(2)(3)
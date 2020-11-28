const arr = [5 , 3, 8, 4, 2]
function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
function bubbleSort(arr) {
    const len = arr.length
    if (len <= 1) {
        return arr
    }
    for (let i = 0; i < len - 1; i++) {
        for (j = 0; j < len - 1 - i; j ++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }
    return arr
}

console.log(bubbleSort(arr));
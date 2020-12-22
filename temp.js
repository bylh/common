function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) { // 终止条件
        return arr
    }
    let pivotIndex = partition(arr, left, right)
    quickSort(arr, left, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, right)
    return arr
}
// 
function partition(arr, left, right) {
    let pivot = arr[left]
    let flagIndex = left + 1
    for (let i = left + 1; i <= right; i++) {
        if (arr[i] < pivot) {
            swap(arr, i, flagIndex)
            flagIndex++
        }
    }
    swap(arr, left, flagIndex - 1)
    return flagIndex - 1
}
function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const arr = [5, 3, 8, 4, 2]

console.log(quickSort(arr))
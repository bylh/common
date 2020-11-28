// Es6简洁实现快速排序
function quickSortEs6(arr) {
    if (arr.length <= 1) {
        return arr
    }
    // pivot为中心、轴的意思
    const [pivot, ...rest] = arr

    return [
        ...quickSortEs6(rest.filter(x => x < pivot)),
        pivot,
        ...quickSortEs6(rest.filter(x => x > pivot))
    ]
}
// 快速排序思想 https://wiki.jikexueyuan.com/project/easy-learn-algorithm/fast-sort.html
// 和我之前一直以为的有区别，终于纠正了

function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
/**
 * 
 * @param {*} arr  数组
 * @param {*} start 起始下标
 * @param {*} end  结束下标 + 1
 */
function divide(arr, start, end) {
    // 基准点
    const pivot = arr[end - 1]
    let i = start - 1
    for (let j = start; j < end - 1; j++) {
        // 如果比基准点小就i++, 然后交换元素位置
        if (arr[j] <= pivot) {
            i++
            swap(arr, i, j)
        }
    }
    // 最后将基准点插入到i+1的位置
    swap(arr, i + 1, end - 1)
    return i + 1
}
function quickSort(arr, start = 0, end = arr.length) {
    if (start < end - 1) {
        const pivotIndex = divide(arr, start, end)
        quickSort(arr, start, pivotIndex)
        quickSort(arr, pivotIndex + 1, end)
    }
}

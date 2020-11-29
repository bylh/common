/* 归并排序是建立在归并操作上的一种有效稳定的排序算法，该算法是采用分治法的
一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列，即先使每个子序列有序，再使得子序列段间有序。
若将两个有序表合并成一个有序表，称为二路归并
 */

function merge(left, right) {
    let l = left.length
    let r = right.length
    if (l === 0) {
        return right
    }
    if (r === 0) {
        return left
    }
    const res = []
    let i = 0, j = 0
    while (i < l && j < r) {
        if (left[i] <= right[j]) {
            res.push(left[i])
            i++
        } else {
            res.push(right[j])
            j++
        }
    }
    while (i < l) {
        res.push(left[i++])
    }
    while (j < r) {
        res.push(right[j++])
    }
    return res
}
function mergeSort(arr) {
    let len = arr.length
    if (len <= 1) {
        return arr
    }
    let middle = Math.floor(len / 2)
    return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)))
}
const arr = [1, 2, 3, 4, 5]
console.log(mergeSort(arr))
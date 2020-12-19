// Es6简洁实现快速排序
function quickSortEs6(arr) {
    if (arr.length <= 1) {
        return arr
    }
    // pivot为中心、轴的意思
    const [pivot, ...rest] = arr

    return [
        ...quickSortEs6(rest.filter(x => x <= pivot)),
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
// 快速排序
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
};

function partition(arr, left, right) {
    //分区操作
    let pivot = left, //设定基准值（pivot）
        index = pivot + 1;
    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
};

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};
const arr = [5, 3, 8, 4, 2]
console.log(quickSort(arr))
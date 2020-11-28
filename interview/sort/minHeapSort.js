/**
 * 交换元素
 * @param {*} arr 
 * @param {*} i 
 * @param {*} j 
 */
function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
/**
 * 当前父节点到最大索引进行元素调整
 * @param {} arr 
 * @param {*} parentIndex 
 * @param {*} len
 */
function shiftDown(arr, parentIndex, len) {
    let temp = arr[parentIndex] // 当前父节点
    let childIndex = parentIndex * 2 + 1
    while (childIndex < len) {
        // childIndex + 1 < len 说明右孩子存在， 取较小的（因为父节点要小于等于孩子节点）
        if (childIndex + 1 < len && arr[childIndex] > arr[childIndex + 1]) {
            childIndex++
        }
        if (temp <= arr[childIndex]) { // 如果已经满足条件则终止
            break
        }
        swap(arr, parentIndex, childIndex) // 交换父节点和孩子节点
        parentIndex = childIndex           // 因为做了调整，可能影响下面的树，所以往下走继续调整，直到都完成
        childIndex = 2 * parentIndex + 1
    }
}
/**
 * 构建小顶堆
 * @param {*} arr 
 */
function buildHeap(arr) {
    // 构建小顶堆不需要遍历所有元素，只需要从后往前遍历有孩子节点的父节点就行
    // 只要每一个有孩子节点的节点符合小顶堆定义，那么整棵树一定是小顶堆（这个思想很好理解吧）
    for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
        // 注意， 建堆的时候, len传值为arr.length
        shiftDown(arr, i, arr.length)
    }
    console.log('小顶堆', arr)
}
/**
 * 进行堆排序
 * @param {} arr 
 */
function heapSort(arr) {
    // 构建大顶堆
    buildHeap(arr)
    for (let i = arr.length - 1; i > 0; i--) {
        // 遍历，因为已经是小顶堆了，所以根元素一定是最小的，直接和最后一个元素交换，
        swap(arr, 0, i)
        // len传值为i, 总是比长度小1，目的是排除最后一个元素（即交换后的元素）
        shiftDown(arr, 0, i)
    }
    return arr
}
const arr = [5, 3, 2, 7, 6]
console.log(heapSort(arr))
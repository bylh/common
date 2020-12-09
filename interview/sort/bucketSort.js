/**
 * 桶排序
 * @param {*} arr 
 * @param {*} bucketSize 默认为5
 */
function bucketSort(arr, bucketSize = 5) {
    // 查找当前数组中的最大值和最小值，确定范围
    let minValue = arr[0], maxValue = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (minValue > arr[i]) {
            minValue = arr[i]
        }
        if (maxValue < arr[i]) {
            maxValue = arr[i]
        }
    }
    // 桶的数量
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
    const buckets = new Array(bucketCount)
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = []
    }
    // 将arr中的数分到各个桶中
    for (let i = 0; i < arr.length; i++) {
        let index = Math.floor((arr[i] - minValue) / bucketSize)
        buckets[index].push(arr[i])
    }
    const res = []
    for (let i = 0; i < buckets.length; i++) {
        buckets[i].sort((a, b) => a - b)
        res.push(...buckets[i])
    }
    return res
}

const arr = [5 , 3, 8, 4, 2]
console.log(bucketSort(arr, 2))
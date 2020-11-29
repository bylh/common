function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i] // 记录当前位置的数
        let j = i
        for (; j > 0; j--) {
            if (temp >= arr[j - 1]) {
                break
            }
            arr[j] = arr[j - 1]
        }
        
        arr[j] = temp
    }
    return arr
}

let arr = [2,5,10,7,10,32,90,9,11,1,0,10]
console.log(insertSort(arr));
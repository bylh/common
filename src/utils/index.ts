export function deepClone(data) {
    if (data instanceof Array) {
        let newData = new Array;
        for (let i = 0, l = data.length; i < l; i++) {
            newData[i] = deepClone(data[i]);
        }
        return newData;
    }
    else if (data instanceof Object) {
        let newData = new Object;
        for (let i in data) {
            newData[i] = deepClone(data[i]);
        }
        return newData;
    }
    else {
        return data;
    }
}

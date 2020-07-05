function observer(target) {
  if (typeof target !== 'object' || target == null) {
    return target
  }
  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}

function defineReactive(target, key, value) {
  observer(value)
  Object.defineProperty(target, key, {
    get() {
      return value
    },
    set(newValue) {
      if (newValue !== value) {
        observer(newValue)
        value = newValue
        updateView()
      }
    },
  })
}

// 如果属性不存在，新增的属性会是响应式的吗
function updateView() {
  console.log('更新视图')
}

let data = { name: 'zf', age: { n: 100 } }
// console.log('更新前：', data.name, data.age.n);
// console.dir(data);
observer(data)
// data.name = 'jw';
// data.age.n = 300;
data.age = { n: 200 }
data.age.n = 300
// console.log('更新后：', data.name, data.age.n);
// console.dir(data);

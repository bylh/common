# vue3

## vue3 Composition Api和Option Api的区别

+ vue2 option组织功能更偏向于按功能组织比如data、computed、watch、methods等等定义属性和方法，共同处理全部的页面逻辑，业务逻辑一般是按组件拆分的，其实有些功能拆分是不需要用组件的，但是不按照组件拆分抽离一个函数，是没法用vue的生命周期等逻辑的， 随着业务的复杂度的提升，会导致功能杂糅在一起，复用性不高，导致后续维护复杂（一个功能往往需要在不同的vue配置项中定义属性和方法，比较分散，项目小还好，清晰明了，但是项目大了后，一个methods中可能包含20多个方法，你往往分不清哪个方法对应着哪个功能）

---

+ vue3的Composition Api就是用来解决这个问题的， 在vue3 Composition Api中， 我们的代码是根据逻辑功能来组织的，一个功能定义的所有api会放在一起（更加的高内聚、低耦合），而不像vue2 Option Api中一个功能的所有Api都是分散的，需要改动功能， 到处找Api的过程是很费劲的

---

+ 基于函数组合的 API 更好的重用逻辑代码（在vue2 Options API中通过Mixins重用逻辑代码，容易发生命名冲突且关系不清）

## vue3的优势

+ 增强对typescript的支持
+ 使用composition api代替options api, 更倾向于对逻辑进行功能划分，函数中可以直接使用vue生命周期
+ virtual dom 优化，对静态节点进行标记，对比的时候可以排除，动态节点和静态节点比例越悬殊，优势越明显
+ proxy代替defineProperty, proxy是劫持对象，而defineProperty是劫持属性
  
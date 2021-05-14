import RBush from 'rbush'

console.log('RBush', RBush)
class myRBush extends RBush {
    toBBox([x, y]) { return {minX: x, minY: y, maxX: x, maxY: y}; }
    compareMinX(a, b) { return a.x - b.x; }
    compareMinY(a, b) { return a.y - b.y; }
}

const tree = new myRBush()
tree.insert([20, 50])
const result = tree.search({
    minX: 40,
    minY: 20,
    maxX: 80,
    maxY: 70
});
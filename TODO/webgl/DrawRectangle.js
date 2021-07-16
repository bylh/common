function main() {
    const canvas = document.getElementById('example')
    if (!canvas) {
        return
    }
    const ctx = canvas.getContext('2d')
    // 计算机系统通常用红、绿、蓝组合表达颜色
    ctx.fillStyle = 'rgb(0, 0, 255, 1.0)' // 设置填充为蓝色
    ctx.fillRect(120, 10, 150, 150)
}
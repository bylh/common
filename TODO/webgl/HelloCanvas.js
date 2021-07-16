function main() {
    const canvas = document.getElementById('webgl')
    if (!canvas) {
        return
    }
    const gl = getWebGLContext(canvas)
    if (!gl) {
        console.error('Failed to get the rendering context for webGL')
        return
    }
    // 指定清空canvas的颜色
    gl.clearColor(1.0, 1.0, 0.0, 1.0)
    gl.clear(gl.COLOR_BUFFER_BIT)
}
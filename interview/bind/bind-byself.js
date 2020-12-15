function build(fn, context) {
    return function () {
        return fn.apply(context, arguments)
    }
}
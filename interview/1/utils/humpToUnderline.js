function underline(str) {
    return str.replace(/\B([A-Z])/g, '_$1').toLowerCase()
}
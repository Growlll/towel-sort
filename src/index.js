
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(typeof matrix === 'undefined' || matrix.length === 0) return []

    let result = []
    matrix.forEach((el, index) => {
        (index + 1) % 2 === 0 ? el.sort((a, b) => a < b).forEach(el => result.push(el)) : el.forEach(e => result.push(e))
    })
    return result
}

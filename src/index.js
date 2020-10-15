
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(typeof matrix === 'undefined' || matrix.length === 0) return []

    const reducer = (acc, curr, index) => {
        ((index + 1) % 2 === 0) ? curr.sort((a, b) => a < b).forEach(el => acc.push(el)) : curr.forEach(e => acc.push(e))
        return acc
    }
    return (matrix.reduce(reducer, acc = []))
}

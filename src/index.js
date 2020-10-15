
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(typeof matrix === 'undefined' || matrix.length === 0) return []

    return (
        matrix.reduce((acc, curr, index) => acc.concat(index % 2 === 0 ? curr : curr.reverse()))
    )
}

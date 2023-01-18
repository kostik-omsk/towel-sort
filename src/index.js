// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length == 0) return [];
    let sort = [];
    for (let i = 0; i < matrix.length; i++) {
        i % 2 == 0
            ? sort.push(...matrix[i])
            : sort.push(...matrix[i].reverse());
    }
    return sort;
};

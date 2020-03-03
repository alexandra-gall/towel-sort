module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    const result = [];
    matrix.forEach(element => {
        if (Array.isArray(element)) {
            matrix.indexOf(element) % 2
                ? result.push(...element.reverse())
                : result.push(...element);
        } else {
            result.push(element);
        }
    });
    return result;
};

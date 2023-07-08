const myFunction = (x, y) => {
    if (x > 0) {
        y = x + y
        if (y > 10) {
            y = y - 2
        }
    }
    return y;
}
module.exports = myFunction;
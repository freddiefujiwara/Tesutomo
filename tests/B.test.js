const myFunction = require('../src/myFunction');

test('B', () => {
    expect(myFunction(2, 9)).toBe(9);
    expect(myFunction(3, 7)).toBe(10);
    expect(myFunction(-1, 12)).toBe(12);
});
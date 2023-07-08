const myFunction = require('../src/myFunction');

test('D', () => {
    expect(myFunction(-10, -10)).toBe(-10);
    expect(myFunction(13, -3)).toBe(10);
    expect(myFunction(18, -5)).toBe(11);
});

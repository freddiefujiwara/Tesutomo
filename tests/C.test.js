const myFunction = require('../src/myFunction');

test('C', () => {
    expect(myFunction(60, -59)).toBe(1);
    expect(myFunction(-59, 60)).toBe(60);
    expect(myFunction(59, 60)).toBe(117);
});
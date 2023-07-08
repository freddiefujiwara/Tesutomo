const myFunction = require('../src/myFunction');

test('A', () => {
    expect(myFunction(120, 119)).toBe(237);
    expect(myFunction(-119, 120)).toBe(120);
    expect(myFunction(-119, -120)).toBe(-120);
});

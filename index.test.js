const { calculateBMI } = require('./index');

test('Test for underweight', () => {
    expect(calculateBMI(2, 40)).toBe('underweight');
});

test('Test for normal', () => {
    expect(calculateBMI(1.7, 60)).toBe('normal');
});

test('Test for obese', () => {
    expect(calculateBMI(2, 120)).toBe('obese');
});
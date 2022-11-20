// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('valid phone number 510-123-4567', () => {
    expect(functions.isPhoneNumber('(510) 123-4567')).toBe(true);
})

test('valid phone number 123-4567', () => {
    expect(functions.isPhoneNumber('123-4567')).toBe(true);
})

test('invalid phone number with letters', () => {
    expect(functions.isPhoneNumber('123-abc-defg')).toBe(false);
})

test('invalid phone number 1234', () => {
    expect(functions.isPhoneNumber('1234')).toBe(false);
})

test('valid UCSD email', () => {
    expect(functions.isEmail('k4chan@ucsd.edu')).toBe(true);
})

test('valid Gmail', () => {
    expect(functions.isEmail('kristychan@gmail.com')).toBe(true);
})

test('invalid email without domain', () => {
    expect(functions.isEmail('k4chan')).toBe(false);
})

test('invalid email with only @', () => {
    expect(functions.isEmail('k4chan@')).toBe(false);
})

test('valid password with only letters', () => {
    expect(functions.isStrongPassword('abcde')).toBe(true);
})

test('valid password with letters and numbers', () => {
    expect(functions.isStrongPassword('a1b2b34c6_d9e8')).toBe(true);
})

test('invalid password with invalid characters', () => {
    expect(functions.isStrongPassword('abcd123~?!.')).toBe(false);
})

test('invalid password that is too long', () => {
    expect(functions.isStrongPassword('abcdefg123456789')).toBe(false);
})

test('valid date', () => {
    expect(functions.isDate('11/19/2022')).toBe(true);
})

test('valid date', () => {
    expect(functions.isDate('1/1/2222')).toBe(true);
})

test('invalid date, 11-19-2022', () => {
    expect(functions.isDate('11-19-2022')).toBe(false);
})

test('invalid date, no year', () => {
    expect(functions.isDate('11/19')).toBe(false);
})

test('valid 3 character code', () => {
    expect(functions.isHexColor('#AAA')).toBe(true);
})

test('valid 6 character code', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
})

test('invalid 5 character code', () => {
    expect(functions.isHexColor('#FFFFF')).toBe(false);
})

test('invalid characters', () => {
    expect(functions.isHexColor('#FFFGGG')).toBe(false);
})
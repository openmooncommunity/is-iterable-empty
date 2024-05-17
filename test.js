const isIterableEmpty = require('./index');

test('returns true for an empty array', () => {
    expect(isIterableEmpty([])).toBe(true);
});

test('returns false for a non-empty array', () => {
    expect(isIterableEmpty([1, 2, 3])).toBe(false);
});

test('returns true for an empty string', () => {
    expect(isIterableEmpty('')).toBe(true);
});

test('returns false for a non-empty string', () => {
    expect(isIterableEmpty('hello')).toBe(false);
});

test('returns true for an empty Set', () => {
    expect(isIterableEmpty(new Set())).toBe(true);
});

test('returns false for a non-empty Set', () => {
    expect(isIterableEmpty(new Set([1, 2, 3]))).toBe(false);
});

test('throws TypeError for non-iterable', () => {
    expect(() => isIterableEmpty(123)).toThrow(TypeError);
    expect(() => isIterableEmpty({})).toThrow(TypeError);
    expect(() => isIterableEmpty(null)).toThrow(TypeError);
    expect(() => isIterableEmpty(undefined)).toThrow(TypeError);
});

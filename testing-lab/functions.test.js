const { returnTwo, greeting, add, subtract, multiply, divide } = require('./functions');

test('test for returnTwo()', () => {
    expect(returnTwo()).toBe(2);
});

describe('tests for greeting()', () => {
    test('testing for James', () => {
        expect(greeting('James')).toBe('Hello, James');
    });
    
    test('testing for Jill', () => {
        expect(greeting('Jill')).toBe('Hello, Jill');
    });
});

describe('Math Functions', () => {
    test('testing add', () => {
        expect(add(1, 2)).toEqual(3);
        expect(add(10, 20)).toEqual(30);
        expect(add(6451, 26541)).toEqual(32992);
    });

    test('testing subtract', () => {
        expect(subtract(3, 2)).toEqual(1);
        expect(subtract(10, 5)).toEqual(5);
        expect(subtract(316, 615)).toEqual(-299);
    });

    test('testing multiply', () => {
        expect(multiply(3, 2)).toEqual(6);
        expect(multiply(10, 5)).toEqual(50);
        expect(multiply(316, -615)).toEqual(-194340);
    });

    test('testing divide', () => {
        expect(divide(3, 2)).toEqual(1.5);
        expect(divide(10, 5)).toEqual(2);
        expect(divide(22144, 64)).toEqual(346);
    });
});
const sum = require('../src/sum')

describe('prueba para suma', () => {
    test('1 + 2 = 3', () => {
        expect(sum(1,2)).toBe(3)
    })
})
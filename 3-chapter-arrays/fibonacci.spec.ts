import { fibonacci } from './fibonacci'

describe('Imperative Fibonacci', () => {
  test('Should check if fibonacci returns correct value', () => {
    const result = fibonacci(10)
    expect(result).toBe(55)
  })
})

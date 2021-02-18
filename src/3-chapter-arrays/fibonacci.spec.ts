import { fibonacci } from './fibonacci'

describe('Imperative Fibonacci', () => {
  test('Should check if function returns the min value', () => {
    const result = fibonacci(0)
    expect(result).toBe(0)
  })

  test('Should check if fibonacci returns correct value', () => {
    const result = fibonacci(10)
    expect(result).toBe(55)
  })

  test('Should return an error if a negative value is provided', () => {
    const result = fibonacci(-1)
    expect(result).toEqual(new Error('The value must be positive'))
  })
})

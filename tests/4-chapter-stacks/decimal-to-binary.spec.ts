import { DecimalToBinary } from '@/4-chapter-stacks/decimal-to-binary'

describe('DecimalToBinary', () => {
  describe('calcRest()', () => {
    test('Should return 0 when an even value is provided', () => {
      const decimalToBinary = new DecimalToBinary()
      const rest = decimalToBinary.calcRest(10)
      expect(rest).toBe(0)
    })

    test('Should return 1 when an odd value is provided', () => {
      const decimalToBinary = new DecimalToBinary()
      const rest = decimalToBinary.calcRest(5)
      expect(rest).toBe(1)
    })
  })

  describe('calcQuotient()', () => {
    test('Should return the quotient correctly for the number 10', () => {
      const decimalToBinary = new DecimalToBinary()
      const quotient = decimalToBinary.calcQuotient(10)
      expect(quotient).toBe(5)
    })

    test('Should return the quotient correctly for the number 5', () => {
      const decimalToBinary = new DecimalToBinary()
      const quotient = decimalToBinary.calcQuotient(5)
      expect(quotient).toBe(2)
    })
  })
})

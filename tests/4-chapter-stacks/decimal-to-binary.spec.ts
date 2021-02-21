import { DecimalToBinary } from '@/4-chapter-stacks/decimal-to-binary'

describe('DecimalToBinary', () => {
  describe('calcRest()', () => {
    test('Should returns 0 when an even value is provided', () => {
      const decimalToBinary = new DecimalToBinary()
      const rest = decimalToBinary.calcRest(10)
      expect(rest).toBe(0)
    })

    test('Should returns 0 when an odd value is provided', () => {
      const decimalToBinary = new DecimalToBinary()
      const rest = decimalToBinary.calcRest(5)
      expect(rest).toBe(1)
    })
  })
})

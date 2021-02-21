import { DecimalToBinary } from '@/4-chapter-stacks/decimal-to-binary'

interface SutTypes {
  sut: DecimalToBinary
}

const makeSut = (): SutTypes => ({
  sut: new DecimalToBinary()
})

describe('DecimalToBinary', () => {
  describe('calcRest()', () => {
    test('Should return 0 when an even value is provided', () => {
      const { sut } = makeSut()
      const rest = sut.calcRest(10)
      expect(rest).toBe(0)
    })

    test('Should return 1 when an odd value is provided', () => {
      const { sut } = makeSut()
      const rest = sut.calcRest(5)
      expect(rest).toBe(1)
    })
  })

  describe('calcQuotient()', () => {
    test('Should return the quotient correctly for the number 10', () => {
      const { sut } = makeSut()
      const quotient = sut.calcQuotient(10)
      expect(quotient).toBe(5)
    })

    test('Should return the quotient correctly for the number 5', () => {
      const { sut } = makeSut()
      const quotient = sut.calcQuotient(5)
      expect(quotient).toBe(2)
    })
  })
})

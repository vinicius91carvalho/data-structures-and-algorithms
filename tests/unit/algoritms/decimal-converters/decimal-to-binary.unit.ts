
import { DecimalToBinary } from '@/algorithms/decimal-converters/decimal-to-binary'
import { StackPopSpy, StackPushSpy } from '@/tests/unit/mocks/mock-stack'

interface SutTypes {
  sut: DecimalToBinary
  stackPushSpy: StackPushSpy
  stackPopSpy: StackPopSpy
}

const makeSut = (): SutTypes => {
  const stackPopSpy = new StackPopSpy()
  const stackPushSpy = new StackPushSpy()
  const sut = new DecimalToBinary(stackPushSpy, stackPopSpy)
  return {
    sut,
    stackPushSpy,
    stackPopSpy
  }
}

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

  describe('convert()', () => {
    test('Should fill stackPushSpy with correct values', () => {
      const { sut, stackPushSpy } = makeSut()
      sut.convert(10)
      expect(stackPushSpy.allItems).toEqual([0, 1, 0, 1])
      expect(stackPushSpy.callsCount).toBe(4)
    })

    test('Should fill stackPopSpy with correct values', () => {
      const { sut, stackPopSpy } = makeSut()
      sut.convert(10)
      expect(stackPopSpy.callsCount).toBe(5)
      expect(stackPopSpy.allItems).toEqual([])
    })

    test('Should return the binary value in string', () => {
      const { sut } = makeSut()
      const convertedValue = sut.convert(10)
      expect(convertedValue).toEqual('1010')
    })
  })
})

import { DecimalToAnotherBase } from '@/algorithms/decimal-converters/decimal-to-another-base'
import { IllegalArgumentError } from '@/errors/illegal-argument-error'
import { StackPopSpy, StackPushSpy } from '@/tests/unit/mocks/mock-stack'
import faker from 'faker'

interface SutTypes {
  sut: DecimalToAnotherBase
  stackPushSpy: StackPushSpy
  stackPopSpy: StackPopSpy
}

const makeSut = (base: number): SutTypes => {
  const stackPushSpy = new StackPushSpy()
  const stackPopSpy = new StackPopSpy()
  const sut = new DecimalToAnotherBase(base, stackPushSpy, stackPopSpy)
  return {
    sut,
    stackPushSpy,
    stackPopSpy
  }
}

describe('DecimalToAnotherBase', () => {
  test('Should make a DecimalToAnotherBase with base 2', () => {
    const { sut } = makeSut(2)
    expect(sut instanceof DecimalToAnotherBase).toBe(true)
  })

  test('Should not make a DecimalToAnotherBase with base less than 2', () => {
    expect(() => { makeSut(faker.random.number(1)) }).toThrowError(new IllegalArgumentError('toBase', 'base'))
  })

  test('Should make a DecimalToAnotherBase with base 36', () => {
    const { sut } = makeSut(36)
    expect(sut instanceof DecimalToAnotherBase).toBe(true)
  })

  test('Should not make a DecimalToAnotherBase with base greather than 36', () => {
    expect(() => { makeSut(faker.random.number({ min: 37 })) }).toThrowError(new IllegalArgumentError('toBase', 'base'))
  })

  describe('calcRest()', () => {
    test('Should return 7 when 15 value is provided using base 8', () => {
      const { sut } = makeSut(8)
      expect(sut.calcRest(15)).toBe(7)
    })

    test('Should return 1 when 5 value is provided using base 2', () => {
      const { sut } = makeSut(2)
      expect(sut.calcRest(5)).toBe(1)
    })
  })

  describe('calcQuotient()', () => {
    test('Should return 5 when 10 value is provided using base 2', () => {
      const { sut } = makeSut(2)
      expect(sut.calcQuotient(10)).toBe(5)
    })

    test('Should return 2 when 16 value is provided using base 8', () => {
      const { sut } = makeSut(8)
      expect(sut.calcQuotient(16)).toBe(2)
    })

    test('Should return 2 when 17 value is provided using base 8', () => {
      const { sut } = makeSut(8)
      expect(sut.calcQuotient(17)).toBe(2)
    })
  })

  describe('convert()', () => {
    test('Should call push on stack with correct values', () => {
      const { sut, stackPushSpy } = makeSut(2)
      sut.convert(10)
      expect(stackPushSpy.allItems).toEqual([0, 1, 0, 1])
      expect(stackPushSpy.callsCount).toBe(4)
    })

    test('Should call pop on stack with correct values', () => {
      const { sut, stackPopSpy } = makeSut(2)
      sut.convert(10)
      expect(stackPopSpy.allItems).toEqual([])
      expect(stackPopSpy.callsCount).toBe(5)
    })

    test('Should return the converted string value when correct values is provided', () => {
      const { sut } = makeSut(2)
      const convertedValue = sut.convert(10)
      expect(convertedValue).toEqual('1010')
    })
  })
})

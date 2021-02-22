import { DecimalToAnotherBase } from '@/algorithms/decimal-converters/decimal-to-another-base'
import { IllegalArgumentError } from '@/errors/illegal-argument-error'
import faker from 'faker'

const makeSut = (base: number): DecimalToAnotherBase => DecimalToAnotherBase.toBase(base)

describe('DecimalToAnotherBase', () => {
  test('Should make a DecimalToAnotherBase with base 2', () => {
    const sut = makeSut(2)
    expect(sut instanceof DecimalToAnotherBase).toBe(true)
  })

  test('Should not make a DecimalToAnotherBase with base less than 2', () => {
    expect(() => { makeSut(faker.random.number(1)) }).toThrowError(new IllegalArgumentError('toBase', 'base'))
  })

  test('Should make a DecimalToAnotherBase with base 36', () => {
    const sut = makeSut(36)
    expect(sut instanceof DecimalToAnotherBase).toBe(true)
  })

  test('Should not make a DecimalToAnotherBase with base greather than 36', () => {
    expect(() => { makeSut(faker.random.number({ min: 37 })) }).toThrowError(new IllegalArgumentError('toBase', 'base'))
  })

  describe('calcRest()', () => {
    test('Should return 7 when 15 value is provided using base 8', () => {
      const sut = makeSut(8)
      expect(sut.calcRest(15)).toBe(7)
    })

    test('Should return 1 when 5 value is provided using base 2', () => {
      const sut = makeSut(2)
      expect(sut.calcRest(5)).toBe(1)
    })
  })
})

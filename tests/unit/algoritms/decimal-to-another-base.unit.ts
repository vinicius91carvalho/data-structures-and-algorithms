import { DecimalToAnotherBase } from '@/algorithms/decimal-to-another-base'
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
})

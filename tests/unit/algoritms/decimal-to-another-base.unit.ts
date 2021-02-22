import { DecimalToAnotherBase } from '@/algorithms/decimal-to-another-base'

const makeSut = (base: number): DecimalToAnotherBase => DecimalToAnotherBase.toBase(2)

describe('DecimalToAnotherBase', () => {
  test('Should make a GeneralDecimalConverter with base from 2', () => {
    const sut = makeSut(2)
    expect(sut).toBeTruthy()
  })
})

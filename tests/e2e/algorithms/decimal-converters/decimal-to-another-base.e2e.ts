import { DecimalToAnotherBase } from '@/algorithms/decimal-converters/decimal-to-another-base'
import { makeDecimalToAnotherBase } from '@/factories/algorithms/decimal-to-another-base-factory'

const makeSut = (base: number): DecimalToAnotherBase => makeDecimalToAnotherBase(base)

describe('DecimalToAnotherBase', () => {
  test('Should return the correct value when binary base is used', () => {
    const sut = makeSut(2)
    const convertedValue = sut.convert(100345)
    expect(convertedValue).toEqual('11000011111111001')
  })

  test('Should return the correct value when octal base is used', () => {
    const sut = makeSut(8)
    const convertedValue = sut.convert(100345)
    expect(convertedValue).toEqual('303771')
  })

  test('Should return the correct value when hexadecimal base is used', () => {
    const sut = makeSut(16)
    const convertedValue = sut.convert(100345)
    expect(convertedValue).toEqual('187F9')
  })
})

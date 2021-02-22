import { DecimalToBinary } from '@/algorithms/decimal-converters/decimal-to-binary'
import { makeDecimalToBinary } from '@/factories/algorithms/decimal-to-binary-factory'

const makeSut = (): DecimalToBinary => makeDecimalToBinary()

describe('DecimalToBinary', () => {
  test('Should returns correct binary value to 233 dividend', () => {
    const sut = makeSut()
    const result = sut.convert(233)
    expect(result).toEqual('11101001')
  })

  test('Should returns correct binary value to 10 dividend', () => {
    const sut = makeSut()
    const result = sut.convert(10)
    expect(result).toEqual('1010')
  })

  test('Should returns correct binary value to 1000 dividend', () => {
    const sut = makeSut()
    const result = sut.convert(1000)
    expect(result).toEqual('1111101000')
  })
})

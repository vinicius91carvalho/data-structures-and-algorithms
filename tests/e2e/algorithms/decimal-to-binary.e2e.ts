import { DecimalToBinary } from '@/algorithms/decimal-to-binary'
import { makeDecimalToBinary } from '@/factories/algorithms/decimal-to-binary-factory'

const makeSut = (): DecimalToBinary => makeDecimalToBinary()

describe('DecimalToBinary', () => {
  test('Should returns correct binary value to 233 dividend', () => {
    const sut = makeSut()
    const result = sut.calc(233)
    expect(result).toEqual('11101001')
  })
})

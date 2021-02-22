import { DecimalToBinary } from '@/algorithms/decimal-converters/decimal-to-binary'
import { makeStack } from '@/factories/data-structues/stack-factory'

export const makeDecimalToBinary = (): DecimalToBinary => {
  const stack = makeStack()
  return new DecimalToBinary(stack, stack)
}

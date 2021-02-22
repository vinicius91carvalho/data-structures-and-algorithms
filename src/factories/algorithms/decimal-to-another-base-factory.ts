import { DecimalToAnotherBase } from '@/algorithms/decimal-converters/decimal-to-another-base'
import { makeStack } from '@/factories/data-structues/stack-factory'

export const makeDecimalToAnotherBase = (base: number): DecimalToAnotherBase => {
  const stack = makeStack()
  return new DecimalToAnotherBase(base, stack, stack)
}

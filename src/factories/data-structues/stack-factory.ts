import { StackArray } from '@/data-structures/stacks/stack-array'
import { Stack } from '@/data-structures/stacks/stack-protocols'

export const makeStack = (): Stack => {
  return new StackArray()
}

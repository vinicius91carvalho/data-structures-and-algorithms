import { CalcQuotient, CalcRest, ConvertDecimal } from '@/algorithms/decimal-converters/decimal-converter'
import { PushItems } from '@/data-structures/stacks/stack-protocols'
import { IllegalArgumentError } from '@/errors/illegal-argument-error'

export class DecimalToAnotherBase implements CalcRest, CalcQuotient, ConvertDecimal {
  constructor (
    private readonly base: number,
    private readonly pushItems: PushItems
  ) {
    if (base < 2 || base > 36) {
      throw new IllegalArgumentError('toBase', 'base')
    }
  }

  calcRest (dividend: number): number {
    return dividend % this.base
  }

  calcQuotient (dividend: number): number {
    return Math.floor(dividend / this.base)
  }

  convert (dividend: number): string {
    while (dividend > 0) {
      const rest = this.calcRest(dividend)
      this.pushItems.push(rest)
      dividend = this.calcQuotient(dividend)
    }
    return ''
  }
}

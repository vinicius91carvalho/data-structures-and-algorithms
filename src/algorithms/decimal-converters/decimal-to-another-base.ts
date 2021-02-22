import { CalcQuotient, CalcRest, ConvertDecimal } from '@/algorithms/decimal-converters/decimal-converter'
import { PopItem, PushItems } from '@/data-structures/stacks/stack-protocols'
import { IllegalArgumentError } from '@/errors/illegal-argument-error'

export class DecimalToAnotherBase implements CalcRest, CalcQuotient, ConvertDecimal {
  readonly MIN_BASE = 2
  readonly MAX_BASE = 36

  constructor (
    private readonly base: number,
    private readonly pushItems: PushItems,
    private readonly popItem: PopItem
  ) {
    if (base < this.MIN_BASE || base > this.MAX_BASE) {
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
    let item: number
    do {
      item = this.popItem.pop()
    } while (item !== undefined)
    return ''
  }
}

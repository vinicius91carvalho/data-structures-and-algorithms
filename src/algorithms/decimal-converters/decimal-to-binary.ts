import { DecimalConverter } from '@/algorithms/decimal-converters/decimal-converter'
import { PopItem, PushItems } from '@/data-structures/stacks/stack-protocols'

export class DecimalToBinary implements DecimalConverter {
  constructor (
    private readonly pushItems: PushItems,
    private readonly popItem: PopItem
  ) {}

  calcRest (dividend: number): number {
    return dividend % 2
  }

  calcQuotient (dividend: number): number {
    return Math.floor(dividend / 2)
  }

  convert (dividend: number): string {
    while (dividend > 0) {
      const rest = this.calcRest(dividend)
      this.pushItems.push(rest)
      dividend = this.calcQuotient(dividend)
    }
    let item: number
    let binaryValue: string = ''
    do {
      item = this.popItem.pop()
      binaryValue = item !== undefined ? `${binaryValue}${item}` : binaryValue
    } while (item !== undefined)
    return binaryValue
  }
}

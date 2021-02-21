import { PopItem, PushItems } from '@/4-chapter-stacks/stacks/stack-protocols'

export class DecimalToBinary {
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

  calc (value: number): void {
    let dividend = value
    while (dividend > 0) {
      const rest = this.calcRest(dividend)
      this.pushItems.push(rest)
      dividend = this.calcQuotient(dividend)
    }
    let item: any
    let valueConverted: string = ''
    do {
      item = this.popItem.pop()
      valueConverted = item ? `${valueConverted}${item}` : valueConverted
    } while (item !== undefined)
  }
}

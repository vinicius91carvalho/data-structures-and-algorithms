import { CalcQuotient, CalcRest } from '@/algorithms/decimal-converters/decimal-converter'
import { IllegalArgumentError } from '@/errors/illegal-argument-error'

export class DecimalToAnotherBase implements CalcRest, CalcQuotient {
  private constructor (private readonly base: number) {}

  static toBase (base: number): DecimalToAnotherBase {
    if (base < 2 || base > 36) {
      throw new IllegalArgumentError('toBase', 'base')
    }
    return new DecimalToAnotherBase(base)
  }

  calcRest (dividend: number): number {
    return dividend % this.base
  }

  calcQuotient (dividend: number): number {
    return Math.floor(dividend / this.base)
  }
}

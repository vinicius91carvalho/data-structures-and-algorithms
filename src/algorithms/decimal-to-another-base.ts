import { IllegalArgumentError } from '@/errors/illegal-argument-error'

export class DecimalToAnotherBase {
  private constructor (private readonly base: number) {}

  static toBase (base: number): DecimalToAnotherBase {
    if (base < 2 || base > 36) {
      throw new IllegalArgumentError('toBase', 'base')
    }
    return new DecimalToAnotherBase(base)
  }
}

import { IllegalArgumentError } from '@/errors/illegal-argument-error'

export class DecimalToAnotherBase {
  private constructor (private readonly base: number) {}

  static toBase (base: number): DecimalToAnotherBase {
    if (base < 2) {
      throw new IllegalArgumentError('toBase', 'base')
    }
    return new DecimalToAnotherBase(base)
  }
}

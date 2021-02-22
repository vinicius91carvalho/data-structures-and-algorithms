export class DecimalToAnotherBase {
  private constructor (private readonly base: number) {}

  static toBase (base: number): DecimalToAnotherBase {
    return new DecimalToAnotherBase(base)
  }
}
